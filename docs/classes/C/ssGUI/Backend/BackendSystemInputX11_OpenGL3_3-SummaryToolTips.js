﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.Backend.BackendSystemInputX11_OpenGL3_3",{862:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype862\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendSystemInputX11_OpenGL3_3</div></div></div><div class=\"TTSummary\">This class is the interface for getting all the inputs needed.&nbsp; **There will be changes regarding on how to get key presses and realtime input info soon.**</div></div>",864:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype864\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> UpdateInput() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::UpdateInput</div></div>",865:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype865\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const</span> std::vector&lt;ssGUI::Enums::GenericButtonAndKeyInput&gt;&amp; GetLastButtonAndKeyPresses() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetLastButtonAndKeyPresses</div></div>",866:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype866\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const</span> std::vector&lt;ssGUI::Enums::GenericButtonAndKeyInput&gt;&amp; GetCurrentButtonAndKeyPresses() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentButtonAndKeyPresses</div></div>",867:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype867\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> IsButtonOrKeyPressExistLastFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">GenericButtonAndKeyInput&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::IsButtonOrKeyPressExistLastFrame</div></div>",868:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype868\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> IsButtonOrKeyPressExistCurrentFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">GenericButtonAndKeyInput&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::IsButtonOrKeyPressExistCurrentFrame</div></div>",869:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype869\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">glm::ivec2 GetLastMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetLastMousePosition</div></div>",870:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype870\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">glm::ivec2 GetCurrentMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentMousePosition</div></div>",871:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype871\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">position,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetMousePosition</div></div>",872:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype872\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetLastMouseButton(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">MouseButton&nbsp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetLastMouseButton</div></div>",873:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype873\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetCurrentMouseButton(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">MouseButton&nbsp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentMouseButton</div></div>",874:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype874\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">glm::vec2 GetCurrentMouseScrollDelta() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentMouseScrollDelta</div></div>",875:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype875\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::vector&lt;ssGUI::RealtimeInputInfo&gt; <span class=\"SHKeyword\">const</span> &amp; GetLastRealtimeInputs() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetLastRealtimeInputs</div></div>",876:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype876\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::vector&lt;ssGUI::RealtimeInputInfo&gt; <span class=\"SHKeyword\">const</span> &amp; GetCurrentRealtimeInputs() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentRealtimeInputs</div></div>",877:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype877\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::wstring GetTextInput() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetTextInput</div></div>",878:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype878\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetCursorType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">CursorType&nbsp;</td><td class=\"PName last\">cursorType</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetCursorType</div></div>",879:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype879\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">ssGUI::Enums::CursorType GetCursorType() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCursorType</div></div>",880:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype880\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> CreateCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">cursorSize,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::CreateCustomCursor</div></div>",881:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype881\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetCurrentCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetCurrentCustomCursor</div></div>",882:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype882\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> GetCurrentCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&amp;&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentCustomCursor</div></div>",883:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype883\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::<span class=\"SHKeyword\">string</span> GetCurrentCustomCursorName() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentCustomCursorName</div></div>",884:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype884\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> GetCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&amp;&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCustomCursor</div></div>",885:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype885\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> HasCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::HasCustomCursor</div></div>",886:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype886\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> UpdateCursor() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::UpdateCursor</div></div>",887:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype887\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> AddRawEventHandler(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">bool</span>(ssGUI::Backend::BackendMainWindowInterface*, <span class=\"SHKeyword\">void</span>*)&gt;&nbsp;</td><td class=\"PName last\">handler</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::AddRawEventHandler</div></div>",888:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype888\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RemoveRawEventHandler(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::RemoveRawEventHandler</div></div>",889:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype889\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> ClearRawEventHandler() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClearRawEventHandler</div></div>",890:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype890\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClearClipboard() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClearClipboard</div></div>",891:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype891\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClipbaordHasText() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClipbaordHasText</div></div>",892:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype892\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClipbaordHasImage() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClipbaordHasImage</div></div>",893:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype893\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> SetClipboardImage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">imgData</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetClipboardImage</div></div>",894:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype894\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> SetClipboardText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">wstring&amp;&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetClipboardText</div></div>",895:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype895\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetClipboardImage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">imgData</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetClipboardImage</div></div>",896:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype896\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetClipboardText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">wstring&amp;&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetClipboardText</div></div>",897:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype897\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uint64_t GetElapsedTime() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetElapsedTime</div></div>"});