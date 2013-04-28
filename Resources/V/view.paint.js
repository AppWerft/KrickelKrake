view.paint = ( function() {
		var api = {};

		api.getPaintWindow = function() {
			var Paint = require('ti.paint');

			var paintViewHistory = [];
			var win = Ti.UI.createWindow({
				backgroundColor : 'white',
				navBarHidden : true
			});
			var pencilContainer = Ti.UI.createScrollView({
				top : 0,
				right : 0,
				height : 50,
				width : 280,
				backgroundColor : 'gray',
				backgroundImage : '/assets/shadow.png',
				layout : 'horizontal',
				contentHeight : 50,
				contentWidth : 'auto'
			});
			var toolsButton = Ti.UI.createImageView({
				image : '/assets/undo.png',
				width : 36,
				left : 2,
				height : 50,
				top : 0
			});
			var pencilImages = [];
			var masken = [];
			var pencilViews = []
			var activecolor = null;
			for(var i = 0; i < pencils.length; i++) {
				pencilViews[i] = Ti.UI.createView({
					width : 36,
					height : 60,
					bottom : 20,
					ndx : i,
					line : 5,
					color : '#' + pencils[i].color
				});
				var line = Ti.UI.createLabel({
					text : pencilViews[i].line,
					right : 4,
					bottom : 0,
					font : {
						fontSize : 10
					}
				});
				pencilViews[i].add(line);
				masken[i] = Ti.UI.createMaskedImage({
					image : '/assets/pencil_maske.png',
					width : '100%',
					height : '100%',
					tint : '#' + pencils[i].color,
					parent : pencilViews[i],

					mode : Titanium.UI.iOS.BLEND_MODE_SOURCE_IN
				});
				pencilImages[i] = Ti.UI.createMaskedImage({
					image : '/assets/pencil_alpha.png',
					width : '100%',
					height : '100%',
					tint : 'black',
					parent : pencilViews[i],
					mode : Titanium.UI.iOS.BLEND_MODE_SOURCE_IN
				});
				pencilViews[i].add(masken[i]);
				pencilViews[i].add(pencilImages[i]);
				pencilContainer.add(pencilViews[i]);
				pencilViews[i].addEventListener('click', function(e) {
					if(activecolor != null) {
						pencilViews[activecolor].setBottom(20);
					}
					e.source.parent.setBottom(5);
					activecolor = e.source.parent.ndx;
					var tempfile = Ti.Filesystem.createTempFile();
					tempfile.write(paintView.toImage());
					paintViewHistory.push(tempfile.nativePath);
					
					paintView.eraseMode = false;
					paintView.strokeColor = e.source.parent.color;
					hint.animate(Ti.UI.createAnimation({
						bottom : -100,
						duration : 2000,
					}));
				});
				function undo() {
					toolsButton.removeEventListener('click', undo);
					if(paintViewHistory.length > 0) {
						paintView.clear();
						var lastPaintView = paintViewHistory.pop();
						paintView.image = lastPaintView;
					}
					setTimeout(function() {
						toolsButton.addEventListener('click', undo);
					}, 100);
				}


				toolsButton.addEventListener('click', undo);

			}
			pencilContainer.add(toolsButton);
			var paintView = Paint.createPaintView({
				top : 50,
				backgroundImage : '/assets/bg.png',
				strokeColor : '#0f0',
				strokeAlpha : 255,
				strokeWidth : 10,
				eraseMode : true,
				borderWidth : 1,
				borderColor : 'silver'
			});
			var hint = Ti.UI.createView({
				bottom : 0,
				height : 30,
				backgroundColor : 'yellow'
			});
			var hintText = Ti.UI.createLabel({
				left : 10,
				top : 10,
				right : 10,
				textAlign : 'center',
				text : 'Bitte suche Dir einen Stift zum Malen aus.',
				font : {
					fontSize : 18,
					fontFamily : 'Cookie-Regular'
				}
			});
			
			hint.add(hintText);
			win.add(pencilContainer);
			win.add(toolsButton);
			win.add(paintView);
			win.add(hint);
			return win;
		}
		return api;

	}());
