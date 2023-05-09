﻿NDContentPage.OnToolTipsLoaded({366:"<div class=\"NDToolTip TStruct LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype366\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;ImageFormat</div></div></div><div class=\"TTSummary\">Default is RGBA 8 bit per channel with non alpha pre-multiplied.</div></div>",576:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype576\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;ImageData</div></div></div><div class=\"TTSummary\">If you are using LoadRawFromMemory, remember to reload it again if there\'s any changes to the image memory.</div></div>",582:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype582\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> NotifyImageDataChange()</div></div><div class=\"TTSummary\">Notifies that the image data has changed.</div></div>",585:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype585\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> LoadRawFromMemory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">void const</span> *&nbsp;</td><td class=\"PName last\">dataPtr,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">ImageFormat&nbsp;</td><td class=\"PName last\">format,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">imageSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendImageInterface::LoadRawFromMemory</div></div>",1153:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1153\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendImageInterface</div></div></div><div class=\"TTSummary\">This allows transferring the image data from the host memory to the gpu memory</div></div>",1157:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1157\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> LoadFromPath(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">path</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Loads the image from relative or absolute path</div></div>",1158:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1158\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> LoadImgFileFromMemory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">void const</span> *&nbsp;</td><td class=\"PName last\">dataPtr,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Loads an image file from memory with specified size in bytes</div></div>",1159:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1159\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> LoadRawFromMemory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">void const</span> *&nbsp;</td><td class=\"PName last\">dataPtr,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">ImageFormat&nbsp;</td><td class=\"PName last\">format,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">imageSize</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">This loads an image with specified image format in memory</div></div>",1160:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1160\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetSize() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns the size of the image</div></div>",1162:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1162\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> UpdateCache() = <span class=\"SHNumber\">0</span></div></div></div>"});