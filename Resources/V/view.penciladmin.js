view.pencils = ( function() {
		var api = {};
		api.getAdminWindow = function() {
			var win = Ti.UI.createWindow({
				barColor : 'black',
				title : 'Stiftverwaltung'
			});
			var rows = [];
			for(var i = 0; i < pencils.length; i++) {
				rows[i] = Ti.UI.createTableViewRow({
					hasChild : false,
					color : pencils[i].color
				});
				var view = Ti.UI.createView({
					backgroundColor : pencils[i].color,
					height : 40,
					width : '100%'
				});
				rows[i].add(view);
			}
			var tv = Ti.UI.createTableView({
				data : rows,
				editable : false,
				moveable : true
			});
			tv.addEventListener('click',function(e) {
				var editwindow = createColorPicker({hexColor:e.rowData.color});
				tabGroup.activeTab.open(editwindow);
			});
			
			var edit = Titanium.UI.createButton({
				title : 'Sortieren'
			});

			edit.addEventListener('click', function() {
				win.setRightNavButton(cancel);
				tv.moving = true;
			});
			tv.addEventListener('move', function(e) {
				Titanium.API.info("move - row=" + e.row + ", index=" + e.index + ", section=" + e.section + ", from = " + e.fromIndex);
			});
			var cancel = Titanium.UI.createButton({
				title : 'Abbruch',
				style : Titanium.UI.iPhone.SystemButtonStyle.DONE
			});
			cancel.addEventListener('click', function() {
				win.setRightNavButton(edit);
				tv.moving = false;
			});

			win.setRightNavButton(edit);
			win.add(tv);
			return win;
		}
		return api;

	}());
