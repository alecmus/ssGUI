#include "ssGUI/Backend/Win32_OpenGL3_3/BackendDrawingWin32_OpenGL3_3.hpp"

#include "ssGUI/HelperClasses/ImageUtil.hpp"

#include "ssGUI/DataClasses/ImageData.hpp"
#include "ssGUI/Backend/Win32_OpenGL3_3/BackendMainWindowWin32_OpenGL3_3.hpp"
#include "ssGUI/Backend/BackendManager.hpp"
#include "ssLogger/ssLog.hpp"
#include "glm/gtc/matrix_transform.hpp"
#include "glm/gtc/type_ptr.hpp"

#ifndef UNICODE
#define UNICODE
#define _UNICODE
#endif

#define GL_CHECK_ERROR(x)\
{\
    GLenum err;\
    x;\
    if((err = glGetError()) != GL_NO_ERROR)\
    {\
        ssLOG_LINE("Failed: "<<err);\
    }\
}

namespace ssGUI
{

namespace Backend
{
    ssGUI::Backend::BackendMainWindowInterface* BackendDrawingWin32_OpenGL3_3::GetMainWindow()
    {
        //Check correct backend index
        if(BackendIndex >= ssGUI::Backend::BackendManager::GetMainWindowCount())
            BackendIndex = 0;
        
        if(ssGUI::Backend::BackendManager::GetDrawingInterface(BackendIndex) != 
            static_cast<ssGUI::Backend::BackendDrawingInterface*>(this))
        {
            BackendIndex = ssGUI::Backend::BackendManager::GetDrawingInterfaceIndex(static_cast<ssGUI::Backend::BackendDrawingInterface*>(this));
        }

        return ssGUI::Backend::BackendManager::GetMainWindowInterface(BackendIndex);
    }

    void BackendDrawingWin32_OpenGL3_3::UpdateViewPortAndModelViewIfNeeded()
    {
        ssGUI::Backend::BackendMainWindowInterface* mainWindow = GetMainWindow();

        if(mainWindow == nullptr)
        {
            ssLOG_LINE("Failed to get MainWinodw");
            return;
        }

        if(mainWindow->GetRenderSize() == LastMainWindowSize)
            return;

        LastMainWindowSize = mainWindow->GetRenderSize();
        
        mainWindow->SetGLContext();
        glm::ivec2 renderSize = mainWindow->GetRenderSize();
        GL_CHECK_ERROR( glViewport(0, 0, renderSize.x, renderSize.y); );
        GL_CHECK_ERROR( glMatrixMode(GL_MODELVIEW););
        GL_CHECK_ERROR( glLoadIdentity(); );
        glm::mat4x4 orthoMat = glm::ortho<float>(0.f, renderSize.x, renderSize.y, 0.f, 0, 10);
        GL_CHECK_ERROR( glMultMatrixf(glm::value_ptr(orthoMat)); );
    }

    BackendDrawingWin32_OpenGL3_3::BackendDrawingWin32_OpenGL3_3(BackendDrawingWin32_OpenGL3_3 const& other)
    {
        //TODO
        ssLOG_LINE("Not implemented");
        ssLOG_EXIT_PROGRAM();
    }
    
    BackendDrawingWin32_OpenGL3_3::BackendDrawingWin32_OpenGL3_3() :    BackendIndex(0),
                                                                        LastMainWindowSize(-1, -1),
                                                                        CharTextures(),
                                                                        ImageTextures()
    {
        ssGUI::Backend::BackendManager::AddDrawingInterface(static_cast<ssGUI::Backend::BackendDrawingInterface*>(this));
    }

    BackendDrawingWin32_OpenGL3_3::~BackendDrawingWin32_OpenGL3_3()
    {
        ssGUI::Backend::BackendManager::RemoveDrawingInterface(static_cast<ssGUI::Backend::BackendDrawingInterface*>(this));
    }

    void BackendDrawingWin32_OpenGL3_3::SaveState()
    {
        ssGUI::Backend::BackendMainWindowInterface* mainWindow = GetMainWindow();
        
        if(mainWindow == nullptr)
        {
            ssLOG_LINE("Failed to get MainWinodw");
            return;
        }

        if(!mainWindow->SetGLContext())
        {
            ssLOG_LINE("Failed to set GL state");
            return;
        }

        GL_CHECK_ERROR( glPushClientAttrib(GL_CLIENT_ALL_ATTRIB_BITS); );
        GL_CHECK_ERROR( glPushAttrib(GL_ALL_ATTRIB_BITS); );
        GL_CHECK_ERROR( glMatrixMode(GL_MODELVIEW); );
        GL_CHECK_ERROR( glPushMatrix(); );
        GL_CHECK_ERROR( glMatrixMode(GL_PROJECTION); );
        GL_CHECK_ERROR( glPushMatrix(); );
        GL_CHECK_ERROR( glMatrixMode(GL_TEXTURE); );
        GL_CHECK_ERROR( glPushMatrix(); );
    }

    void BackendDrawingWin32_OpenGL3_3::RestoreState()
    {
        ssGUI::Backend::BackendMainWindowInterface* mainWindow = GetMainWindow();
        
        if(mainWindow == nullptr)
        {
            ssLOG_LINE("Failed to get MainWinodw");
            return;
        }

        if(!mainWindow->SetGLContext())
        {
            ssLOG_LINE("Failed to set GL state");
            return;
        }

        GL_CHECK_ERROR( glMatrixMode(GL_MODELVIEW); );
        GL_CHECK_ERROR( glPopMatrix(); );
        GL_CHECK_ERROR( glMatrixMode(GL_PROJECTION); );
        GL_CHECK_ERROR( glPopMatrix(); );
        GL_CHECK_ERROR( glMatrixMode(GL_TEXTURE); );
        GL_CHECK_ERROR( glPopMatrix(); );
        GL_CHECK_ERROR( glPopClientAttrib(); );
        GL_CHECK_ERROR( glPopAttrib(); );
    }

    //function: DrawEntities
    //Draws the entity based on what is set in the _properties_. Returns true if drawn successfully. *Note that if you are not using <ssGUIManager>, you need to call <Render> at the end in order to render it*.
    bool BackendDrawingWin32_OpenGL3_3::DrawEntities( const std::vector<glm::vec2>& vertices, 
                                            const std::vector<glm::vec2>& texCoords,
                                            const std::vector<glm::u8vec4>& colors,
                                            const std::vector<int>& counts,
                                            const std::vector<ssGUI::DrawingProperty>& properties)
    {
        //Check if the main window is already closed
        if(GetMainWindow()->IsClosed())
            return false;

        UpdateViewPortAndModelViewIfNeeded();

        //Start drawing
        int currentIndex = 0;
        for(int i = 0; i < counts.size(); i++)
        {
            bool result = true;
            //Drawing text
            if(properties[i].fontP != nullptr)
            {
                result = DrawShape(  vertices, texCoords, colors, properties[i].character, currentIndex, currentIndex + counts[i],
                    *properties[i].fontP, properties[i].characterSize);
            }
            //Drawing image
            else if(properties[i].imageP != nullptr)
            {
                result = DrawShape(  vertices, texCoords, colors, currentIndex, currentIndex + counts[i],
                    *properties[i].imageP);
            }
            //Drawing shapes
            else 
            {
                result = DrawShape(  vertices, colors, currentIndex, currentIndex + counts[i]);
            }
            currentIndex += counts[i];

            if(!result)
                return false;
        }

        return true;
    }

    void BackendDrawingWin32_OpenGL3_3::Render(glm::u8vec3 clearColor)
    {   
        ssGUI::Backend::BackendMainWindowInterface* mainWindow = GetMainWindow();
        
        if(mainWindow == nullptr)
        {
            ssLOG_LINE("Failed to get MainWinodw");
            return;
        }
        
        //Get the device context for the window        
        HDC hDC = GetDC(static_cast<ssGUI::Backend::Win32_OpenGL_Handles*>(mainWindow->GetRawHandle())->WindowHandle);
        if(hDC == NULL)
        {
            ssLOG_LINE("Failed to GetDC");
            ssLOG_EXIT_PROGRAM();
        }
        SwapBuffers(hDC);

        GL_CHECK_ERROR( glClear(GL_COLOR_BUFFER_BIT); );

        GL_CHECK_ERROR( glClearColor(   static_cast<float>(clearColor.r) / 255.f, 
                                        static_cast<float>(clearColor.g) / 255.f, 
                                        static_cast<float>(clearColor.b) / 255.f, 
                                        255.f); );
    }

    void BackendDrawingWin32_OpenGL3_3::ClearBackBuffer(glm::u8vec3 clearColor) 
    {
        //Seems like this is causing memory leak
        //GL_CHECK_ERROR( glClearColor(1, 1, 1, 1); );
        //GL_CHECK_ERROR( glClear(GL_COLOR_BUFFER_BIT); );
    }

    void BackendDrawingWin32_OpenGL3_3::RemoveImageLinking(ssGUI::Backend::BackendImageInterface* backendImage)
    {
        if(ImageTextures.find(backendImage) == ImageTextures.end())
            return;

        ImageTextures.erase(backendImage);
    }
    
    bool BackendDrawingWin32_OpenGL3_3::DrawShape( const std::vector<glm::vec2>& vertices, 
                            const std::vector<glm::vec2>& texCoords,
                            const std::vector<glm::u8vec4>& colors,
                            const uint32_t character,
                            const ssGUI::Backend::BackendFontInterface& font,
                            int characterSize)
    {
        return DrawShape(vertices, texCoords, colors, character, 0, vertices.size(), font, characterSize);
    }

    bool BackendDrawingWin32_OpenGL3_3::DrawShape( const std::vector<glm::vec2>& vertices, 
                            const std::vector<glm::vec2>& texCoords,
                            const std::vector<glm::u8vec4>& colors,
                            const ssGUI::Backend::BackendImageInterface& image)
    {
        return DrawShape(vertices, texCoords, colors, 0, vertices.size(), image);
    }

    bool BackendDrawingWin32_OpenGL3_3::DrawShape( const std::vector<glm::vec2>& vertices, 
                            const std::vector<glm::u8vec4>& colors)
    {
        return DrawShape(vertices, colors, 0, vertices.size());        
    }

    //NOTE: End index is exclusive
    bool BackendDrawingWin32_OpenGL3_3::DrawShape( const std::vector<glm::vec2>& vertices, 
                            const std::vector<glm::vec2>& texCoords,
                            const std::vector<glm::u8vec4>& colors,
                            const uint32_t character,
                            int startIndex, int endIndex,
                            const ssGUI::Backend::BackendFontInterface& font,
                            int characterSize)
    {
        auto& rawFont = const_cast<ssGUI::Backend::BackendFontInterface&>(font);

        ssGUI::ImageData charImgData;
        if(!rawFont.GetCharacterImage(character, characterSize, charImgData))
            return false;

        GetMainWindow()->SetGLContext();
    
        glm::ivec2 imgSize = charImgData.GetSize();
        if(CharTextures.find(character) == CharTextures.end())
        {
            GLuint textureId = 0;

            GL_CHECK_ERROR( glGenTextures(1, &textureId); );
            GL_CHECK_ERROR( glBindTexture(GL_TEXTURE_2D, textureId); );
            GL_CHECK_ERROR( glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE); );
            GL_CHECK_ERROR( glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE); );
            GL_CHECK_ERROR( glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST); );
            GL_CHECK_ERROR( glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST); );

            //Convert it to rgba32
            uint8_t* rgba32Img = new uint8_t[charImgData.GetSize().x * charImgData.GetSize().y * 4];
            ssGUI::ImageFormat format;
            void* rawPixelFormat = charImgData.GetPixelPtr(format);
            
            ssGUI::ImageUtil::ConvertToRGBA32(static_cast<void*>(rgba32Img), rawPixelFormat, format, imgSize);

            GL_CHECK_ERROR( glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, imgSize.x, imgSize.y, 0, GL_RGBA, GL_UNSIGNED_BYTE, 
                            rgba32Img); );

            GL_CHECK_ERROR( glBindTexture(GL_TEXTURE_2D, textureId); );

            CharTextures[character] = textureId;

            delete[] rgba32Img;
        }
        else
        {
            GL_CHECK_ERROR( glBindTexture(GL_TEXTURE_2D, CharTextures[character]); );
        }
         
        GL_CHECK_ERROR( glEnable(GL_TEXTURE_2D); );
        GL_CHECK_ERROR( glEnable(GL_BLEND); );
        GL_CHECK_ERROR( glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA); );

        glBegin(GL_TRIANGLE_FAN);

        for(int i = startIndex; i < endIndex; i++)
        {
            glm::vec2 texCoord = texCoords[i];

            texCoord.x /= imgSize.x;
            texCoord.y /= imgSize.y;
            
            glColor4ub(colors[i].r, colors[i].g, colors[i].b, colors[i].a);
            glTexCoord2f(texCoord.x, texCoord.y);
            glVertex3f(vertices[i].x, vertices[i].y, 0);
        }

        GL_CHECK_ERROR( glEnd(); );
        GL_CHECK_ERROR( glBindTexture(GL_TEXTURE_2D, 0); );
        GL_CHECK_ERROR( glFlush(); );

        return true;
    }

    bool BackendDrawingWin32_OpenGL3_3::DrawShape( const std::vector<glm::vec2>& vertices, 
                            const std::vector<glm::vec2>& texCoords,
                            const std::vector<glm::u8vec4>& colors,
                            int startIndex, int endIndex,
                            const ssGUI::Backend::BackendImageInterface& image)
    {
        GetMainWindow()->SetGLContext();

        //GL_CHECK_ERROR( glUseProgram(ProgramId); );
        glm::ivec2 imgSize = image.GetSize();
        //TODO: Remove const cast
        if(ImageTextures.find(const_cast<ssGUI::Backend::BackendImageInterface*>(&image)) == ImageTextures.end())
        {
            //Get image
            ssGUI::ImageFormat format;
            const void* rawPtr = image.GetPixelPtr(format);

            //Convert it to rgba32
            uint8_t* rgba32Img = new uint8_t[image.GetSize().x * image.GetSize().y * 4];            
            ssGUI::ImageUtil::ConvertToRGBA32(static_cast<void*>(rgba32Img), rawPtr, format, image.GetSize());

            GLuint textureId = 0;

            GL_CHECK_ERROR( glGenTextures(1, &textureId); );
            GL_CHECK_ERROR( glBindTexture(GL_TEXTURE_2D, textureId); );
            GL_CHECK_ERROR( glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE); );
            GL_CHECK_ERROR( glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE); );
            GL_CHECK_ERROR( glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST); );
            GL_CHECK_ERROR( glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST); );
            
            //Save it to gpu
            GL_CHECK_ERROR( glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, imgSize.x, imgSize.y, 0, GL_RGBA, GL_UNSIGNED_BYTE, 
                            rgba32Img); );

            GL_CHECK_ERROR( glBindTexture(GL_TEXTURE_2D, textureId); );


            ImageTextures[const_cast<ssGUI::Backend::BackendImageInterface*>(&image)] = textureId;

            delete[] rgba32Img;
        }
        else
        {
            GL_CHECK_ERROR( glBindTexture(GL_TEXTURE_2D, ImageTextures[const_cast<ssGUI::Backend::BackendImageInterface*>(&image)]); );
        }

        //render it
        GL_CHECK_ERROR( glEnable(GL_TEXTURE_2D); );
        GL_CHECK_ERROR( glEnable(GL_BLEND); );
        GL_CHECK_ERROR( glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA); );

        glBegin(GL_TRIANGLE_FAN);

        for(int i = startIndex; i < endIndex; i++)
        {
            glm::vec2 texCoord = texCoords[i];

            texCoord.x /= imgSize.x;
            texCoord.y /= imgSize.y;
            glTexCoord2f(texCoord.x, texCoord.y);

            glColor4ub(colors[i].r, colors[i].g, colors[i].b, colors[i].a);

            glVertex3f(vertices[i].x, vertices[i].y, 0);
        }


        GL_CHECK_ERROR( glEnd(); );
        GL_CHECK_ERROR( glBindTexture(GL_TEXTURE_2D, 0); );
        GL_CHECK_ERROR( glFlush(); );

        return true;        
    }


    bool BackendDrawingWin32_OpenGL3_3::DrawShape( const std::vector<glm::vec2>& vertices, 
                            const std::vector<glm::u8vec4>& colors,
                            int startIndex, int endIndex)
    {   
        GetMainWindow()->SetGLContext();

        GL_CHECK_ERROR( glEnable(GL_BLEND); );
        GL_CHECK_ERROR( glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA); );

        glBegin(GL_TRIANGLE_FAN);

        for(int i = startIndex; i < endIndex; i++)
        {
            glColor4ub(colors[i].r, colors[i].g, colors[i].b, colors[i].a);   
            glVertex3f(vertices[i].x, vertices[i].y, 0);
        }

        GL_CHECK_ERROR( glEnd(); );
        GL_CHECK_ERROR( glFlush(); );

        return true;        
    }
}

}