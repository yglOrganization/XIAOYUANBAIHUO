for(var i = 0; i < 98; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToMoveFunction['u5'] = function() {
var e = windowEvent;

InsertAfterBegin(document.body, "<div class='intcases' id='u5Linksu5OnMove'></div>")
var u5Linksu5OnMove = document.getElementById('u5Linksu5OnMove');
function u5u5OnMove(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u5Linksu5OnMove');
}

InsertBeforeEnd(u5Linksu5OnMove, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u5u5OnMoveu8368d3d2637248f39dc3ddb7d407bc53(event)'>Case 1</div>");
function u5u5OnMoveu8368d3d2637248f39dc3ddb7d407bc53(e)
{

	SetPanelState('u5', 'pd0u5','fade','',500,'none','',500);

	ToggleLinks(e, 'u5Linksu5OnMove');
}

InsertBeforeEnd(u5Linksu5OnMove, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u5u5OnMoveu423c0cb0c0c84be9afc874e93a8d29db(event)'>Case 2</div>");
function u5u5OnMoveu423c0cb0c0c84be9afc874e93a8d29db(e)
{

	SetPanelState('u5', 'pd1u5','none','',500,'none','',500);

	ToggleLinks(e, 'u5Linksu5OnMove');
}

InsertBeforeEnd(u5Linksu5OnMove, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u5u5OnMoveu9f45897b20884c3fa5d667b8f57e425c(event)'>Case 3</div>");
function u5u5OnMoveu9f45897b20884c3fa5d667b8f57e425c(e)
{

	SetPanelState('u5', 'pd2u5','none','',500,'none','',500);

	ToggleLinks(e, 'u5Linksu5OnMove');
}

}

function rdo2onClose(e) {

if (true) {

	SetPanelVisibility('u14','hidden','none',500);

}

}

function rdo0onClose(e) {

if (true) {

	SetPanelVisibility('u78','hidden','none',500);

}

}

function rdo1onClose(e) {

if (true) {

	SetPanelVisibility('u44','hidden','none',500);

}

}
document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	SetPanelState('u5', 'pd1u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u7'] = 'center';document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	SetPanelState('u5', 'pd0u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u16'] = 'center';document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	SetPanelState('u5', 'pd1u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u46'] = 'center';
u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	SetPanelVisibility('u5','','none',500);

	SetPanelVisibility('u78','','none',500);

}
});
document.getElementById('u90_img').tabIndex = 0;
HookHover('u90', false);

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	self.location.href='商品管理.html';

}
});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u62'] = 'center';document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	SetPanelState('u5', 'pd2u5','none','',500,'none','',500);

}
});
u87.tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('后台管理页面.html');

}
});
gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u64'] = 'top';
$axure.eventManager.click('u19', function(e) {

if (true) {

	SetPanelVisibility('u14','hidden','none',500);

}
});
gv_vAlignTable['u58'] = 'center';
$axure.eventManager.click('u49', function(e) {

if (true) {

	SetPanelVisibility('u44','hidden','none',500);

}
});
gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u71'] = 'top';document.getElementById('u92_img').tabIndex = 0;
HookHover('u92', false);

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	self.location.href='账户管理.html';

}
});

$axure.eventManager.click('u83', function(e) {

if (true) {

	SetPanelVisibility('u78','hidden','none',500);

}
});
gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u86'] = 'top';document.getElementById('u25_img').tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	SetPanelState('u5', 'pd2u5','none','',500,'none','',500);

}
});

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	SetPanelVisibility('u5','','none',500);

	SetPanelVisibility('u14','','none',500);

}
});

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	SetPanelVisibility('u5','','none',500);

	SetPanelVisibility('u44','','none',500);

}
});
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u4'] = 'center';document.getElementById('u94_img').tabIndex = 0;
HookHover('u94', false);

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	self.location.href='订单管理.html';

}
});
document.getElementById('u96_img').tabIndex = 0;
HookHover('u96', false);

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href='库存管理.html';

}
});
gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u56'] = 'center';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	SetPanelState('u5', 'pd0u5','none','',500,'none','',500);

}
});

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

rdo0onClose(e);

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u2'] = 'top';
u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

rdo1onClose(e);

}
});
document.getElementById('u57_img').tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	SetPanelState('u5', 'pd1u5','none','',500,'none','',500);

}
});
document.getElementById('u84_img').tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	SetPanelState('u5', 'pd0u5','none','',500,'none','',500);

}
});

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

rdo2onClose(e);

}
});
gv_vAlignTable['u29'] = 'top';document.getElementById('u59_img').tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	SetPanelState('u5', 'pd2u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u67'] = 'top';