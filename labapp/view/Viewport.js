(function() {
	Ext.define("LabApp.view.Viewport", {
		extend : "Ext.container.Viewport",
		requires : [ 'LabApp.view.TreeNavigation','LabApp.view.DocumentPanel','LabApp.view.CenterPanel' ],
		layout : 'fit',
		items : [ {
			xtype : 'panel',
			width : '100%',
			height : '100%',

			title : 'Lab App',
			layout : 'border',
			items : [ {
				xtype : 'treenavigation',
				region : 'west',
				split : true,
				collapsible : true
			}, {
				xtype : 'documentpanel',				
				region : 'east',			
				split : true,
				collapsible : true,
				
			}, {
				xtype : 'centerpanel',
				region : 'center'
			} ]
		} ]
	});
}());