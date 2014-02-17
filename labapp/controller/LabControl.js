(function() {
	Ext.define('LabApp.controller.LabControl', {
		extend : 'Ext.app.Controller',
		requires : [ 
				'LabApp.store.TreeNavigation' ],
		views : [ 'TreeNavigation','DocumentPanel','CenterPanel' ],
		stores : [ 'TreeNavigation' ],
		models : ['Experiment'],

		init : function() {
			console.log("Controller init..");
			 this.control({
				 'treenavigation':{
					 itemclick : function(tree,record){
						 console.log(record);
						 Ext.getCmp('centerpanel').update(record.data.text);
						 Ext.getCmp('documentpanel').update(record.data.text);
					 }
				 }
		     });
		}
	});
}());