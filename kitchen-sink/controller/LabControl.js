(function(){
	Ext.define('KitchenSink.controller.LabControl',{
		extend:'Ext.app.Controller',
		requires: ['KitchenSink.view.base.TreeNavigation','KitchenSink.store.TreeNavigation'],
		views:['base.TreeNavigation'],
		stores: ['TreeNavigation'],
		
		init: function(){
			console.log("Controller init..");
		}
	});
}());