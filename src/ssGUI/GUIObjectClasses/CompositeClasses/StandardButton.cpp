#include "ssGUI/GUIObjectClasses/CompositeClasses/StandardButton.hpp"

#include "ssGUI/GUIObjectClasses/MainWindow.hpp" //For getting mouse position
#include "ssGUI/EventCallbacks/OnObjectDestroyEventCallback.hpp"

namespace ssGUI
{
    StandardButton::StandardButton(StandardButton const& other) : Button(other)
    {
        ButtonText = other.ButtonText;
        ButtonImage = other.ButtonImage;
        AdaptiveButtonTextColor = other.IsAdaptiveButtonTextColor();
        ButtonTextColorDifference = other.GetAdaptiveButtonTextColorDifference();
        AdaptiveButtonTextContrast = other.IsAdaptiveButtonTextContrast();
        IconButtonMode = other.IsIconButtonMode();
    }
    
    void StandardButton::UpdateButtonText()
    {
        FUNC_DEBUG_ENTRY();
        auto buttonTextObj = CurrentObjectsReferences.GetObjectReference(ButtonText);
        if(buttonTextObj == nullptr)
        {
            FUNC_DEBUG_EXIT();
            return;
        }
        
        if(IconButtonMode)
        {
            buttonTextObj->SetVisible(false);
            FUNC_DEBUG_EXIT();
            return;
        }

        buttonTextObj->SetVisible(true);

        ssGUI::Extensions::AdvancedSize* as;
        
        if(!buttonTextObj->GetExtension(ssGUI::Extensions::AdvancedSize::EXTENSION_NAME))
            buttonTextObj->AddExtension(ssGUI::Factory::Create<ssGUI::Extensions::AdvancedSize>());

        as = static_cast<ssGUI::Extensions::AdvancedSize*>(buttonTextObj->GetExtension(ssGUI::Extensions::AdvancedSize::EXTENSION_NAME));

        as->SetHorizontalUsePercentage(true);
        as->SetHorizontalPercentage(1);
        as->SetVerticalUsePercentage(true);
        as->SetVerticalPercentage(1);

        static_cast<ssGUI::Text*>(buttonTextObj)->SetHorizontalAlignment(ssGUI::Enums::TextAlignmentHorizontal::CENTER);
        static_cast<ssGUI::Text*>(buttonTextObj)->SetVerticalAlignment(ssGUI::Enums::TextAlignmentVertical::CENTER);
        FUNC_DEBUG_EXIT();
    }

    void StandardButton::UpdateButtonImage()
    {
        FUNC_DEBUG_ENTRY();
        auto buttonImgObj = CurrentObjectsReferences.GetObjectReference(ButtonImage);
        if(buttonImgObj == nullptr)
        {
            FUNC_DEBUG_EXIT();
            return;
        }

        if(!IconButtonMode)
        {
            buttonImgObj->SetVisible(false);
            FUNC_DEBUG_EXIT();
            return;
        }
        buttonImgObj->SetVisible(true);
        
        ssGUI::Extensions::AdvancedSize* as;
        ssGUI::Extensions::AdvancedPosition* ap;
        
        if(!buttonImgObj->GetExtension(ssGUI::Extensions::AdvancedSize::EXTENSION_NAME))
            buttonImgObj->AddExtension(ssGUI::Factory::Create<ssGUI::Extensions::AdvancedSize>());

        as = buttonImgObj->GetAnyExtension<ssGUI::Extensions::AdvancedSize>();

        as->SetHorizontalUsePercentage(true);
        as->SetHorizontalPercentage(0.5);
        as->SetVerticalUsePercentage(true);
        as->SetVerticalPercentage(0.5);

        if(!buttonImgObj->GetExtension(ssGUI::Extensions::AdvancedPosition::EXTENSION_NAME))
            buttonImgObj->AddExtension(ssGUI::Factory::Create<ssGUI::Extensions::AdvancedPosition>());

        ap = buttonImgObj->GetAnyExtension<ssGUI::Extensions::AdvancedPosition>();
        ap->SetHorizontalAnchor(ssGUI::Extensions::AdvancedPosition::HorizontalAnchor::CENTER);
        ap->SetVerticalAnchor(ssGUI::Extensions::AdvancedPosition::VerticalAnchor::CENTER);

        FUNC_DEBUG_EXIT();
    }

    const std::string StandardButton::ListenerKey = "Standard Button";

    StandardButton::StandardButton() : ButtonText(-1), ButtonImage(-1), AdaptiveButtonTextColor(true), ButtonTextColorDifference(glm::ivec4(0, 0, 0, 0)), 
                                        AdaptiveButtonTextContrast(true), IconButtonMode(false)
    {
        FUNC_DEBUG_ENTRY();
        SetSize(glm::vec2(50, 50));

        //Add visual extensions
        RemoveExtension(ssGUI::Extensions::Border::EXTENSION_NAME);

        auto boxShadow = ssGUI::Factory::Create<ssGUI::Extensions::BoxShadow>();
        AddExtension(boxShadow);

        auto roundedCorners = ssGUI::Factory::Create<ssGUI::Extensions::RoundedCorners>();
        roundedCorners->SetRoundedCornersRadius(5);
        AddExtension(roundedCorners);

        auto outline = ssGUI::Factory::Create<ssGUI::Extensions::Outline>();
        outline->SetSimpleOutline(false);
        outline->SetOutlineColor(glm::u8vec4(0, 0, 0, 127));
        outline->SetOutlineThickness(1);
        AddExtension(outline);

        //Add button text
        auto buttonText = new ssGUI::Text();
        buttonText->SetUserCreated(false);
        buttonText->SetHeapAllocated(true);
        buttonText->SetParent(this);
        buttonText->SetMinSize(glm::vec2(5, 5));
        buttonText->SetTextColor(glm::u8vec4(255, 255, 255, 255));
        ButtonText = CurrentObjectsReferences.AddObjectReference(buttonText);
        SetAdaptiveButtonTextColor(true);   //Update the text color

        //Add button text clean-up
        ssGUI::EventCallbacks::OnObjectDestroyEventCallback* onDestroyCallback = nullptr;
        if(!IsEventCallbackExist(ssGUI::EventCallbacks::OnObjectDestroyEventCallback::EVENT_NAME))
        {
            onDestroyCallback = ssGUI::Factory::Create<ssGUI::EventCallbacks::OnObjectDestroyEventCallback>();
            AddEventCallback(onDestroyCallback);
        }

        onDestroyCallback = GetAnyEventCallback<ssGUI::EventCallbacks::OnObjectDestroyEventCallback>();
        onDestroyCallback->AddEventListener
        (
            ListenerKey, this,
            [](ssGUI::GUIObject* src, ssGUI::GUIObject* container, ssGUI::ObjectsReferences* references)
            {
                auto buttonText = static_cast<ssGUI::StandardButton*>(container)->GetButtonTextObject();

                if(buttonText != nullptr && buttonText->GetParent() != container && !buttonText->Internal_IsDeleted())
                    buttonText->Delete();
            }
        );
        
        //Change button callback
        auto buttonEventCallback = GetEventCallback(ssGUI::EventCallbacks::ButtonStateChangedEventCallback::EVENT_NAME);
        buttonEventCallback->RemoveEventListener(Button::ListenerKey, this);
        buttonEventCallback->AddEventListener
        (
            ListenerKey, this,
            [](ssGUI::GUIObject* src, ssGUI::GUIObject* container, ssGUI::ObjectsReferences* refs)
            {
                ssGUI::StandardButton* btn = static_cast<ssGUI::StandardButton*>(container);
                auto iconImage = btn->GetButtonIconObject();
                int buttonReactAmount = 20;
                glm::u8vec4 bgcolor = btn->GetButtonColor();
                glm::u8vec4 iconTintColor = iconImage == nullptr ? glm::u8vec4(0,0,0,0) : iconImage->GetImageTint();
                switch(btn->GetButtonState())
                {
                    case ssGUI::Enums::ButtonState::NORMAL:
                        btn->SetBackgroundColor(bgcolor);
                        if(iconImage != nullptr)
                        {
                            iconTintColor.a = 255;
                            iconImage->SetImageTint(iconTintColor);
                        }
                        break;
                    case ssGUI::Enums::ButtonState::HOVER:
                        bgcolor.r = bgcolor.r - buttonReactAmount < 0 ? 0 : bgcolor.r - buttonReactAmount;
                        bgcolor.g = bgcolor.g - buttonReactAmount < 0 ? 0 : bgcolor.g - buttonReactAmount;
                        bgcolor.b = bgcolor.b - buttonReactAmount < 0 ? 0 : bgcolor.b - buttonReactAmount;
                        btn->SetBackgroundColor(bgcolor);
                        if(iconImage != nullptr)
                        {
                            iconTintColor.a = 255 - buttonReactAmount * 2;
                            iconImage->SetImageTint(iconTintColor);
                        }
                        break;
                    case ssGUI::Enums::ButtonState::ON_CLICK:
                        break;
                    case ssGUI::Enums::ButtonState::CLICKING:
                        bgcolor.r = bgcolor.r - buttonReactAmount * 2 < 0 ? 0 : bgcolor.r - buttonReactAmount * 2;
                        bgcolor.g = bgcolor.g - buttonReactAmount * 2 < 0 ? 0 : bgcolor.g - buttonReactAmount * 2;
                        bgcolor.b = bgcolor.b - buttonReactAmount * 2 < 0 ? 0 : bgcolor.b - buttonReactAmount * 2;
                        btn->SetBackgroundColor(bgcolor);
                        if(iconImage != nullptr)
                        {
                            iconTintColor.a = 255 - buttonReactAmount * 4;
                            iconImage->SetImageTint(iconTintColor);
                        }
                        break;
                    case ssGUI::Enums::ButtonState::CLICKED:
                        break;
                    case ssGUI::Enums::ButtonState::DISABLED:
                        bgcolor.r = bgcolor.r + buttonReactAmount > 255 ? 255 : bgcolor.r + buttonReactAmount;
                        bgcolor.g = bgcolor.g + buttonReactAmount > 255 ? 255 : bgcolor.g + buttonReactAmount;
                        bgcolor.b = bgcolor.b + buttonReactAmount > 255 ? 255 : bgcolor.b + buttonReactAmount;
                        btn->SetBackgroundColor(bgcolor);
                        if(iconImage != nullptr)
                        {
                            iconTintColor.a = 255 - buttonReactAmount * 2;
                            iconImage->SetImageTint(iconTintColor);
                        }
                        auto textColor = btn->GetButtonTextObject()->GetTextColor();
                        textColor.r = (uint8_t)(textColor.r + buttonReactAmount * 4 & 255);
                        textColor.g = (uint8_t)(textColor.g + buttonReactAmount * 4 & 255);
                        textColor.b = (uint8_t)(textColor.b + buttonReactAmount * 4 & 255);
                        btn->GetButtonTextObject()->SetTextColor(textColor);
                        break;
                }
            }
        ); 

        //Add Button Image
        auto buttonImage = new ssGUI::Image();
        buttonImage->SetUserCreated(false);
        buttonImage->SetHeapAllocated(true);
        buttonImage->SetParent(this);
        buttonImage->SetMinSize(glm::vec2(5, 5));
        buttonImage->SetBackgroundColor(glm::u8vec4(0, 0, 0, 0));
        buttonImage->SetBlockInput(false);
        ButtonImage = CurrentObjectsReferences.AddObjectReference(buttonImage);

        UpdateButtonText();
        UpdateButtonImage();
        NotifyButtonEventCallbackManually();

        FUNC_DEBUG_EXIT();
    }

    StandardButton::~StandardButton()
    {
        NotifyAndRemoveOnObjectDestroyEventCallbackIfExist();
    }

    void StandardButton::SetButtonIconObject(ssGUI::Image* image)
    {
        auto oldImageObj = static_cast<ssGUI::Image*>(CurrentObjectsReferences.GetObjectReference(ButtonImage));
        if(oldImageObj != nullptr) 
            oldImageObj->Delete();
        
        if(image == nullptr)
        {
            ButtonImage = -1;
            return;
        }

        image->SetParent(this);

        ssGUIObjectIndex newImageIndex = CurrentObjectsReferences.GetObjectIndex(image);

        if(newImageIndex != -1)
            ButtonImage = newImageIndex;
        else
            ButtonImage = CurrentObjectsReferences.AddObjectReference(image);

        UpdateButtonImage();
    }

    ssGUI::Image* StandardButton::GetButtonIconObject() const
    {
        return static_cast<ssGUI::Image*>(CurrentObjectsReferences.GetObjectReference(ButtonImage));
    }

    void StandardButton::SetButtonTextObject(ssGUI::Text* text)
    {
        std::wstring oldText = L"";
        auto oldTextObj = static_cast<ssGUI::Text*>(CurrentObjectsReferences.GetObjectReference(ButtonText));
        if(oldTextObj != nullptr)
        {
            oldText = oldTextObj->GetText();
            if(!oldTextObj->IsUserCreated())
                oldTextObj->Delete();
            else
                oldTextObj->SetParent(nullptr);
        }
        
        if(text == nullptr)
        {
            ButtonText = -1;
            return;
        }

        text->SetParent(this);

        ssGUIObjectIndex newTextIndex = CurrentObjectsReferences.GetObjectIndex(text);

        if(newTextIndex != -1)
            ButtonText = newTextIndex;
        else
            ButtonText = CurrentObjectsReferences.AddObjectReference(text);

        text->SetText(oldText);

        UpdateButtonText();
    }

    ssGUI::Text* StandardButton::GetButtonTextObject() const
    {
        return static_cast<ssGUI::Text*>(CurrentObjectsReferences.GetObjectReference(ButtonText));
    }

    void StandardButton::SetAdaptiveButtonTextColor(bool adaptive)
    {
        if(CurrentObjectsReferences.GetObjectReference(ButtonText) == nullptr)
            return;

        AdaptiveButtonTextColor = adaptive;
        auto buttonTextObj = dynamic_cast<ssGUI::Text*>(CurrentObjectsReferences.GetObjectReference(ButtonText));
        SetAdaptiveButtonTextColorDifference(buttonTextObj->GetTextColor() - GetButtonColor());

        SetButtonColor(GetButtonColor());   //Setting the button color to trigger the event callback
    }

    bool StandardButton::IsAdaptiveButtonTextColor() const
    {
        return AdaptiveButtonTextColor;
    }

    void StandardButton::SetAdaptiveButtonTextContrast(bool contrast)
    {
        AdaptiveButtonTextContrast = contrast;

        if(CurrentObjectsReferences.GetObjectReference(ButtonText) == nullptr)
            return;

        SetButtonColor(GetButtonColor());   //Setting the button color to trigger the event callback
    }

    bool StandardButton::IsAdaptiveButtonTextContrast() const
    {
        return AdaptiveButtonTextContrast;
    }

    void StandardButton::SetAdaptiveButtonTextColorDifference(glm::ivec4 difference)
    {
        ButtonTextColorDifference = difference;
    }

    glm::ivec4 StandardButton::GetAdaptiveButtonTextColorDifference() const
    {
        return ButtonTextColorDifference;
    }

    void StandardButton::SetIconButtonMode(bool icon)
    {
        IconButtonMode = icon;
        UpdateButtonText();
        UpdateButtonImage();
    }

    bool StandardButton::IsIconButtonMode() const
    {
        return IconButtonMode;
    }

    void StandardButton::SetButtonColor(glm::u8vec4 color)
    {
        Button::SetButtonColor(color);
                    
        if(GetButtonTextObject() == nullptr)
            return;

        if(!IsAdaptiveButtonTextColor())
        {
            GetButtonTextObject()->RedrawObject();
            return;    
        }

        glm::ivec4 textResult;

        if(IsAdaptiveButtonTextContrast())
        {
            float averageButtonColor = (GetButtonColor().r + GetButtonColor().g + GetButtonColor().b)/3;
            float averageTextDiffColor = (GetAdaptiveButtonTextColorDifference().r + GetAdaptiveButtonTextColorDifference().g + GetAdaptiveButtonTextColorDifference().b)/3;
            int contrastFactor = averageButtonColor + averageTextDiffColor > 255 ? -1 : 1; 
            textResult = (glm::ivec4)GetButtonColor() + GetAdaptiveButtonTextColorDifference() * contrastFactor;
        }
        else
            textResult = (glm::ivec4)color + GetAdaptiveButtonTextColorDifference();

        textResult.r = textResult.r < 0 ? 0 : textResult.r;
        textResult.r = textResult.r > 255 ? 255 : textResult.r;
        textResult.g = textResult.g < 0 ? 0 : textResult.g;
        textResult.g = textResult.g > 255 ? 255 : textResult.g;
        textResult.b = textResult.b > 255 ? 255 : textResult.b;
        textResult.b = textResult.b < 0 ? 0 : textResult.b;
        textResult.a = textResult.a < 0 ? 0 : textResult.a;
        textResult.a = textResult.a > 255 ? 255 : textResult.a;

        GetButtonTextObject()->SetTextColor((glm::u8vec4)textResult);
    }

    ssGUI::Enums::GUIObjectType StandardButton::GetType() const
    {
        return ssGUI::Enums::GUIObjectType::WIDGET | ssGUI::Enums::GUIObjectType::BUTTON |
            ssGUI::Enums::GUIObjectType::STANDARD_BUTTON;
    }

    StandardButton* StandardButton::Clone(bool cloneChildren)
    {
        FUNC_DEBUG_ENTRY();
        StandardButton* temp = new StandardButton(*this);
        CloneExtensionsAndEventCallbacks(temp);   
        
        if(cloneChildren)
        {
            if(CloneChildren(this, temp) == nullptr)
            {
                FUNC_DEBUG_EXIT();
                return nullptr;
            }
        }

        FUNC_DEBUG_EXIT();
        return temp;
    }
}