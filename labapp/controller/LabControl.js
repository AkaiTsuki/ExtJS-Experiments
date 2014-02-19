(function() {
	Ext.define('LabApp.controller.LabControl', {
		extend : 'Ext.app.Controller',
		
		requires:['LabApp.view.panel.BasicPanel','LabApp.view.grid.ArrayGrid','LabApp.view.grid.GroupGrid'],
		
		views : [ 'TreeNavigation','DocumentPanel','CenterPanel' ],
		stores : [ 'TreeNavigation' ],
		models : ['Experiment'],

		init : function() {
			console.log("Controller init..");
			 this.control({
				 'treenavigation':{
					 itemclick : function(tree,record){
						 console.log(record);
						 if(record.data.leaf){
							 var center = Ext.getCmp('centerpanel');
							 center.setTitle(record.data.text);
							 Ext.getCmp('documentpanel').update(record.data.text);
							 center.removeAll();
							 center.add(Ext.widget(record.data.panelname));
							 center.doLayout();
						 }
						 
					 }
				 }
		     });
		}
	});
}());