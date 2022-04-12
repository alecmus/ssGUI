#ifndef SSGUI_STANDARD_BUTTPM
#define SSGUI_STANDARD_BUTTPM

#include "ssGUI/GUIObjectClasses/Text.hpp"
#include "ssGUI/GUIObjectClasses/Button.hpp"
#include "ssGUI/Extensions/AdvancedSize.hpp"
#include "ssGUI/Extensions/RoundedCorners.hpp"
#include "ssGUI/Extensions/Outline.hpp"
#include "ssGUI/Extensions/BoxShadow.hpp"

//namespace: ssGUI
namespace ssGUI
{
    /*class: StandardButton
    A standard button contains button text and with addtional visual extensions added.

    Variables & Constructor:
    ============================== C++ ==============================
    protected:
        ssGUIObjectIndex ButtonText;
        glm::u8vec4 ButtonColor;
    =================================================================
    ============================== C++ ==============================
    StandardButton::StandardButton() : ButtonText(-1), ButtonColor(glm::u8vec4(255, 255, 255, 255))
    {
        SetMinSize(glm::vec2(50, 50));

        //Add visual extensions
        RemoveExtension(ssGUI::Extensions::Border::EXTENSION_NAME);

        auto boxShadow = new ssGUI::Extensions::BoxShadow();
        boxShadow->SetShadowColor(glm::u8vec4(0, 0, 0, 127));
        AddExtension(boxShadow);

        auto roundedCorners = new ssGUI::Extensions::RoundedCorners();
        roundedCorners->SetRoundedCornersRadius(5);
        AddExtension(roundedCorners);

        auto outline = new ssGUI::Extensions::Outline();
        outline->SetSimpleOutline(false);
        outline->SetOutlineColor(glm::u8vec4(255, 255, 255, 255));
        outline->SetOutlineThickness(2);
        AddExtension(outline);
        SetBackgroundColor(ButtonColor);

        //Add button text
        auto buttonText = new ssGUI::Text();
        buttonText->SetUserCreated(false);
        buttonText->SetHeapAllocated(true);
        buttonText->SetParent(this);
        buttonText->SetMinSize(glm::vec2(5, 5));
        //TODO : Change text color
        ButtonText = CurrentObjectsReferences.AddObjectReference(buttonText);

        //Add button text clean-up
        ssGUI::EventCallbacks::OnObjectDestroyEventCallback* callback = nullptr;
        if(IsEventCallbackExist(ssGUI::EventCallbacks::OnObjectDestroyEventCallback::EVENT_NAME))
        {
            callback = static_cast<ssGUI::EventCallbacks::OnObjectDestroyEventCallback*>
                (GetEventCallback(ssGUI::EventCallbacks::OnObjectDestroyEventCallback::EVENT_NAME));
        }
        else
        {
            callback = new ssGUI::EventCallbacks::OnObjectDestroyEventCallback();
            AddEventCallback(callback);
        }
        
        callback->AddEventListener(
            [](ssGUI::GUIObject* src, ssGUI::GUIObject* container, ssGUI::ObjectsReferences* references)
            {
                auto buttonText = static_cast<ssGUI::StandardButton*>(container)->GetButtonTextObject();

                if(buttonText != nullptr && buttonText->GetParent() != container && !buttonText->Internal_IsDeleted())
                    buttonText->Delete();
            });
        
        //Change button callback
        auto buttonEventCallback = GetEventCallback(ssGUI::EventCallbacks::ButtonStateChangedEventCallback::EVENT_NAME);
        buttonEventCallback->RemoveEventListener(0);
        buttonEventCallback->AddEventListener(
            [](ssGUI::GUIObject* src, ssGUI::GUIObject* container, ssGUI::ObjectsReferences* refs)
            {
                ssGUI::StandardButton* btn = static_cast<ssGUI::StandardButton*>(container);
                int buttonReactAmount = 40;
                glm::u8vec4 bgcolor = btn->GetButtonColor();
                switch(btn->GetButtonState())
                {
                    case ssGUI::Enums::ButtonState::NORMAL:
                        btn->SetBackgroundColor(bgcolor);
                        break;
                    case ssGUI::Enums::ButtonState::HOVER:
                        // bgcolor.r = bgcolor.r + buttonReactAmount > 255 ? 255 : bgcolor.r + buttonReactAmount;
                        // bgcolor.g = bgcolor.g + buttonReactAmount > 255 ? 255 : bgcolor.g + buttonReactAmount;
                        // bgcolor.b = bgcolor.b + buttonReactAmount > 255 ? 255 : bgcolor.b + buttonReactAmount;
                        bgcolor.r = bgcolor.r - buttonReactAmount < 0 ? 0 : bgcolor.r - buttonReactAmount;
                        bgcolor.g = bgcolor.g - buttonReactAmount < 0 ? 0 : bgcolor.g - buttonReactAmount;
                        bgcolor.b = bgcolor.b - buttonReactAmount < 0 ? 0 : bgcolor.b - buttonReactAmount;
                        btn->SetBackgroundColor(bgcolor);
                        break;
                    case ssGUI::Enums::ButtonState::CLICKED:
                    case ssGUI::Enums::ButtonState::ON_CLICK:
                    case ssGUI::Enums::ButtonState::CLICKING:
                        bgcolor.r = bgcolor.r - buttonReactAmount * 2 < 0 ? 0 : bgcolor.r - buttonReactAmount * 2;
                        bgcolor.g = bgcolor.g - buttonReactAmount * 2 < 0 ? 0 : bgcolor.g - buttonReactAmount * 2;
                        bgcolor.b = bgcolor.b - buttonReactAmount * 2 < 0 ? 0 : bgcolor.b - buttonReactAmount * 2;
                        btn->SetBackgroundColor(bgcolor);
                        break;
                    case ssGUI::Enums::ButtonState::DISABLED:
                        bgcolor.r = bgcolor.r + buttonReactAmount < 0 ? 0 : bgcolor.r - buttonReactAmount * 3;
                        bgcolor.g = bgcolor.g + buttonReactAmount < 0 ? 0 : bgcolor.g - buttonReactAmount * 3;
                        bgcolor.b = bgcolor.b + buttonReactAmount < 0 ? 0 : bgcolor.b - buttonReactAmount * 3;
                        btn->SetBackgroundColor(bgcolor);
                        break;
                }
            }); 

        UpdateButtonText();
    }
    =================================================================
    */
    class StandardButton : public Button
    {
        private:
            StandardButton& operator=(StandardButton const& other) = default;

        protected:
            ssGUIObjectIndex ButtonText;
            glm::u8vec4 ButtonColor;

            StandardButton(StandardButton const& other);

            virtual void UpdateButtonText();

        public:
            StandardButton();
            virtual ~StandardButton() override;

            //function: SetButtonTextObject
            //Sets the text object, by default it will be generated
            virtual void SetButtonTextObject(ssGUI::Text* text);
            
            //function: GetButtonTextObject
            //Gets the text object, by default it will be generated
            virtual ssGUI::Text* GetButtonTextObject() const;

            //function: SetButtonColor
            //Sets the button color that can be referenced from the ButtonStateChangedEventCallback
            virtual void SetButtonColor(glm::u8vec4 color);
            
            //function: GetButtonColor
            //Gets the button color that can be referenced from the ButtonStateChangedEventCallback
            virtual glm::u8vec4 GetButtonColor();
            
            //function: GetType
            //See <Widget::GetType>
            virtual ssGUI::Enums::GUIObjectType GetType() const override;
    
            //function: Delete 
            //See <Widget::Delete>
            virtual void Delete() override;

            //function: Internal_Draw
            //See <Widget::Internal_Draw>
            //virtual void Internal_Draw(ssGUI::Backend::BackendDrawingInterface* drawingInterface, ssGUI::GUIObject* mainWindow, glm::vec2 mainWindowPositionOffset) override;
            
            //function: Internal_Update
            //See <Widget::Internal_Update>
            //virtual void Internal_Update(ssGUI::Backend::BackendSystemInputInterface* inputInterface, ssGUI::InputStatus& globalInputStatus, ssGUI::InputStatus& windowInputStatus, ssGUI::GUIObject* mainWindow) override;
            
            //function: Clone
            //See <Widget::Clone>
            virtual GUIObject* Clone(bool cloneChildren) override;
    };
}

#endif