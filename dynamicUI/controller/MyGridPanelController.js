(function() {
	Ext.define('DYNAMICUI.controller.MyGridPanelController', {
		extend: "Deft.mvc.ViewController",
		mixins: [ 'Deft.mixin.Injectable' ],
		
		control:{
			view: {
				columnmove: 'onColumnMove'
			}
		},

		init : function() {
			var me=this;
		},
		
		onColumnMove: function(ct, column, fromIdx, toIdx, eOpts){
			var me=this, view=me.getView();
			view.addTool({
				type: 'save',
				tooltip: 'Save change on this widget',
				handler: function(event, toolEl, header){
					console.log(event);
					console.log(toolEl);
					console.log(header);
					console.log(view);
					header.remove(this);
				}
			});
		}

		
	});
}());