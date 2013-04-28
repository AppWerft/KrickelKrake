// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group

var view = {};

var colorsstring = '000000 555555 0000AA 5555FF 00AA00 55FF55 00AAAA 55FFFF AA0000 FF5555 AA00AA FF55FF AA5500 FFFF55 AAAAAA FFFFFF';
var pencils = [];
for(var i = 0; i < colorsstring.split(' ').length; i++) {
	pencils.push({
		"color" : colorsstring.split(' ')[i],
		"width" : 4,
		"opacity" : 1
	});
};

Ti.include('/V/view.paint.js');
Ti.include('/V/view.penciladmin.js');
Ti.include('/V/colorpicker/color_picker.js');
Ti.include('/V/view.facebook.js');




var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = view.paint.getPaintWindow();

var tab1 = Titanium.UI.createTab({
	icon : '/assets/gl1.png',
	title : 'Krickeln',
	window : win1
});

//
// create controls tab and root window
//
var win2 = view.pencils.getAdminWindow();

var tab2 = Titanium.UI.createTab({
	icon : '/assets/gl2.png',
	title : 'Stifte',
	window : win2
});

var win3 = Titanium.UI.createWindow({
	title : 'Stifte',
	backgroundColor : '#fff'
});
var web = Ti.UI.createWebView({url:'http://krickelkrake.de/'});

var win3 = Ti.UI.createWindow();
win3.add(web);
var tab3 = Titanium.UI.createTab({
	icon : '/assets/fb.png',
	title : 'Facebook',
	window :win3
});

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();
