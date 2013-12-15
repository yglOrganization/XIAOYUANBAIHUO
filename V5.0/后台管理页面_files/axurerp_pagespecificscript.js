for(var i = 0; i < 24; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'top';document.getElementById('u21_img').tabIndex = 0;
HookHover('u21', false);

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if ((GetPanelState('u17')) == ('pd0u17')) {

	SetPanelState('u17', 'pd1u17','none','',500,'fade','',200);

}
else
if ((GetPanelState('u17')) == ('pd1u17')) {

	SetPanelState('u17', 'pd2u17','none','',500,'fade','',200);

}
else
if ((GetPanelState('u17')) == ('pd2u17')) {

	SetPanelState('u17', 'pd0u17','none','',500,'fade','',200);

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u12'] = 'center';
$axure.eventManager.keyup('u15', function(e) {

if (true) {

SetWidgetFormText('u15', '' + (GetWidgetText('u15').toLowerCase()) + '');

}
});

$axure.eventManager.focus('u15', function(e) {

if (true) {

}
});

$axure.eventManager.blur('u15', function(e) {

if ((GetWidgetText('u15')) == ('')) {
function waitu171583ea803541dc9771cd7f3103ae741() {
}
setTimeout(waitu171583ea803541dc9771cd7f3103ae741, 2500);

}
else
if (true) {

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u18'] = 'top';document.getElementById('u7_img').tabIndex = 0;
HookHover('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href='商品管理.html';

}
});
