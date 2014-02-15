(function() {
	Ext.define('LabApp.controller.LabControl', {
		extend : 'Ext.app.Controller',
		requires : [ 'LabApp.view.base.TreeNavigation',
				'LabApp.store.TreeNavigation' ],
		views : [ 'base.TreeNavigation' ],
		stores : [ 'TreeNavigation' ],

		init : function() {
			console.log("Controller init..");
		}
	});
}());