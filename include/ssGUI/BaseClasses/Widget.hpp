#ifndef SSGUI_WIDGET
#define SSGUI_WIDGET

#include "ssGUI/BaseClasses/BaseGUIObject.hpp"

//namespace: ssGUI
namespace ssGUI
{
    //class: Widget
    class Widget : public BaseGUIObject
    {
        private:
            //Widget status
            bool Focused;
            bool Interactable;
            bool BlockInput;
            Widget& operator=(Widget const& other) = default;

        protected:
            Widget(Widget const& other) = default;

        public:
            Widget();
            virtual ~Widget() override;
            
            //function: IsFocused
            virtual bool IsFocused() const;
            
            //function: SetFocus
            virtual void SetFocus(bool focus);
            
            //function: IsInteractable
            virtual bool IsInteractable() const;
            
            //function: SetInteractable
            virtual void SetInteractable(bool interactable);
            
            //function: IsBlockInput
            //Returns if this widget blocks input. If true, the GUI Object behind this widget will not receive the input.
            virtual bool IsBlockInput() const;
            
            //function: SetBlockInput
            //Sets if this widget blocks input. If true, the GUI Object behind this widget will not receive the input.
            virtual void SetBlockInput(bool blockInput);

            //virtual int GetBorderWidth();
            //virtual void SetBorderWidth(int width);

            //virtual glm::u8vec4 GetBorderColor();
            //virtual void SetBorderColor(glm::u8vec4 color);
            
            //function: GetType
            //See <GUIObject::GetType>
            virtual ssGUI::Enums::GUIObjectType GetType() const override;
            
            //function: Delete 
            //See <GUIObject::Delete>
            virtual void Delete() override;

            //function: Internal_Draw
            //See <GUIObject::Internal_Draw>
            virtual void Internal_Draw(ssGUI::Backend::BackendDrawingInterface* drawingInterface, ssGUI::GUIObject* mainWindowP, glm::ivec2 mainWindowPositionOffset) override;
            
            //function: Internal_Update
            //See <GUIObject::Internal_Update>
            virtual void Internal_Update(ssGUI::Backend::BackendSystemInputInterface* inputInterface, ssGUI::InputStatus& globalInputStatus, ssGUI::InputStatus& windowInputStatus, ssGUI::GUIObject* mainWindow) override;
            
            //function: Clone
            //See <GUIObject::Clone>
            virtual GUIObject* Clone(bool cloneChildren) override;
    };
}

#endif