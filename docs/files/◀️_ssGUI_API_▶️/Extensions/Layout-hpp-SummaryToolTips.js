﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/Extensions/Layout.hpp",{1967:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1967\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Extensions</div></div></div></div>",1968:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1968\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Extensions::</span>&#8203;Layout</div></div></div><div class=\"TTSummary\">This extensions allows the children of this GUI object to be positioned and sized in a row or column fashion.</div></div>",1970:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1970\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsHorizontalLayout() <span class=\"SHKeyword\">const</span></div></div></div>",1971:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1971\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetHorizontalLayout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">horizontal</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1972:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1972\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> AddPreferredSizeMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">sizeMultiplier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds a new entry for representing the size of the child to be the size of sizeMultiplier.&nbsp; 0 = 0%, 1 = 100%</div></div>",1973:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1973\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename... floats&gt; <span class=\"SHKeyword\">inline void</span> AddPreferredSizeMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">sizeMultiplier,</td></tr><tr><td class=\"PModifierQualifier first\">floats...&nbsp;</td><td></td><td class=\"PName last\">sizeMultipliers</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1974:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1974\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> AddPreferredSizeMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">sizeMultipliers[],</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1975:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1975\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetPreferredSizeMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">sizeMultiplier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the child with the index to be the size of sizeMultiplier.&nbsp; 0 = 0%, 1 = 100%</div></div>",1976:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1976\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual float</span> GetPreferredSizeMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns the sizeMultiplier of the child with the index.&nbsp; 0 = 0%, 1 = 100%</div></div>",1977:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1977\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemovePreferredSizeMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1978:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1978\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> ClearAllPreferredSizeMultiplier()</div></div></div>",1979:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1979\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GerPreferredSizeMultiplierCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the number of entries for PreferredSizeMultiplier.&nbsp; This will always be updated to the same number of children <b>after</b> each update.</div></div>",1980:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1980\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsChildrenResizingDisabled() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If true, children windows can be resized</div></div>",1981:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1981\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDisableChildrenResizing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">disableResizing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If true, children windows can be resized</div></div>",1982:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1982\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsReverseOrder() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If false, the children are positioned left to right (horizontal) or top to bottom (vertical)</div></div>",1983:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1983\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetReverseOrder(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">reverseOrder</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If false, the children are positioned left to right (horizontal) or top to bottom (vertical)</div></div>",1984:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1984\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsCoverFullLength() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If true, the children will be sized to cover the whole length of the container.</div></div>",1985:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1985\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetCoverFullLength(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">fullLength</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If true, the children will be sized to cover the whole length of the container.</div></div>",1986:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1986\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsOverrideChildrenResizeTypeAndOnTop() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If true, if will override the window children\'s resize type. This should normally be true.</div></div>",1987:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1987\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetOverrideChildrenResizeTypeAndOnTop(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">override</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If true, if will override the window children\'s resize type. This should normally be true.</div></div>",1988:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1988\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> GetUpdateContainerMinMaxSize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If true, this will update the container\'s min max size to match the children\'s total min max size. This should normally be true.</div></div>",1989:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1989\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetUpdateContainerMinMaxSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">update</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If true, this will update the container\'s min max size to match the children\'s total min max size. This should normally be true.</div></div>",1990:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1990\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual float</span> GetPadding() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Padding for layouting the children GUI objects.&nbsp; Padding will be on all 4 sides (widget) or only on left, right and bottom sides (window).</div></div>",1991:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1991\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetPadding(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">padding</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Padding for layouting the children GUI objects.&nbsp; Padding will be on all 4 sides (widget) or only on left, right and bottom sides (window).</div></div>",1992:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1992\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual float</span> GetSpacing() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Spacing between each child</div></div>",1993:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1993\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetSpacing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">spacing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Spacing between each child</div></div>",1994:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1994\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetOverflow(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">overflow</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets if allows the children to overflow the container.&nbsp; If true, the layout extension will not try to cover the full length of the container even if it is set so.</div></div>",1995:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1995\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> GetOverflow() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets if allows the children to overflow the container.&nbsp; If true, the layout extension will not try to cover the full length of the container even if it is set so.</div></div>",1996:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1996\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> ExcludeObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If a GUI Object is excluded, it will be ignored</div></div>",1997:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1997\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> UnexcludeObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If a GUI Object is excluded, it will be ignored</div></div>",1998:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1998\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> ssGUI::GUIObject* AddChildWithWrapper(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">child</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Add a child to container with wrapper</div></div>",1999:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1999\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> ssGUI::GUIObject* AddChildWithAlignment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">child,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">AlignmentHorizontal&nbsp;</td><td class=\"PName last\">horizontal,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">AlignmentVertical&nbsp;</td><td class=\"PName last\">vertical</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This is equivilent to:</div></div>",2000:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2000\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_OnRecursiveChildAdded(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">child</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Listener function when a child is being added</div></div>",2001:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2001\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_OnRecursiveChildRemoved(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">child</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Listener function when a child is being removed</div></div>",2002:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2002\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_OnChildMinMaxSizeChanged(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">child</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Listener function when a child\'s min max size is changed</div></div>",2003:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2003\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsEnabled() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See Extension::IsEnabled</div></div>",2004:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2004\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Update(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreUpdate,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendSystemInputInterface*&nbsp;</td><td class=\"PName last\">inputInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">InputStatus&amp;&nbsp;</td><td class=\"PName last\">inputStatus,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Update</div></div>",2005:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2005\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Draw(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreRender,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">drawingInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">mainWindowPositionOffset</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Draw</div></div>",2006:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2006\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> GetExtensionName() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::GetExtensionName</div></div>",2007:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2007\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> BindToObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">bindObj</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::BindToObject</div></div>",2008:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2008\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Copy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Extensions::</td><td class=\"PType\">Extension*&nbsp;</td><td class=\"PName last\">extension</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Copy</div></div>",2009:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2009\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ObjectsReferences* Internal_GetObjectsReferences() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Internal_GetObjectsReferences</div></div>",2010:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2010\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> Layout* Clone() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Clone</div></div>"});