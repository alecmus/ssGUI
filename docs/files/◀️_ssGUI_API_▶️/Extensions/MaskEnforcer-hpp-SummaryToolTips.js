﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/Extensions/MaskEnforcer.hpp",{1767:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1767\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Extensions</div></div></div></div>",1768:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1768\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Extensions::</span>&#8203;MaskEnforcer</div></div></div><div class=\"TTSummary\">This extension masks the container by calling Mask::MaskObject that is linked to this extension.&nbsp; Normally you should not add this extension manually. You should manage objects to be masked via Mask.</div></div>",1770:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1770\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> AddTargetMaskObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">targetMaskObj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Add a Mask extension to mask this object. targetMaskObj should have Mask attached.</div></div>",1771:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1771\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> AddTargetMaskObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">targetMaskObj,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">int</span>&gt;&nbsp;</td><td class=\"PName last\">targetShapeIndices</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Add a Mask extension to mask this object. targetMaskObj should have Mask attached.&nbsp; Only shapes with specified indices will be masked.&nbsp; GUI Object shape index can be obtained with ssGUI::Renderer::Extension_GetGUIObjectFirstShapeIndex.</div></div>",1772:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1772\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> HasTargetMaskObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">targetMaskObj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns true if targetMaskObj is added to this extension</div></div>",1773:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1773\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveTargetMaskObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">targetMaskObj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes targetMaskObj from this extension</div></div>",1774:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1774\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> ChangeTargetShapeForMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">targetMaskObj,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">int</span>&gt;&nbsp;</td><td class=\"PName last\">targetShapeIndices</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Allows to change which shapes to be masked GUI Object shape index can be obtained with ssGUI::Renderer::Extension_GetGUIObjectFirstShapeIndex.</div></div>",1775:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1775\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;std::pair&lt;ssGUI::GUIObject*, std::vector&lt;<span class=\"SHKeyword\">int</span>&gt;&gt;&gt; GetTargetMaskObjects()</div></div><div class=\"TTSummary\">Returns a list of target mask objects, and a list of shape indices to be masked.&nbsp; If list of shape indices is empty, masking is applied to all shapes GUI Object shape index can be obtained with ssGUI::Renderer::Extension_GetGUIObjectFirstShapeIndex.</div></div>",1776:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1776\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsEnabled() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See Extension::IsEnabled</div></div>",1777:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1777\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Update(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreUpdate,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendSystemInputInterface*&nbsp;</td><td class=\"PName last\">inputInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">InputStatus&amp;&nbsp;</td><td class=\"PName last\">inputStatus,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Update</div></div>",1778:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1778\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Draw(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreRender,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">drawingInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">mainWindowPositionOffset</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Draw</div></div>",1779:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1779\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> GetExtensionName() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::GetExtensionName</div></div>",1780:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1780\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> BindToObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">bindObj</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::BindToObject</div></div>",1781:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1781\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Copy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Extensions::</td><td class=\"PType\">Extension*&nbsp;</td><td class=\"PName last\">extension</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Copy</div></div>",1782:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1782\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ObjectsReferences* Internal_GetObjectsReferences() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Internal_GetObjectsReferences</div></div>",1783:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1783\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> MaskEnforcer* Clone() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Clone</div></div>"});