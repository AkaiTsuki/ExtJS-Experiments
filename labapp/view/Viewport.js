(function() {
	Ext.define("LabApp.view.Viewport", {
		extend : "Ext.container.Viewport",
		requires : [ 'LabApp.view.base.TreeNavigation' ],
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
				xtype : 'panel',
				margin : '5 0 0 0',
				title : 'Documentation',
				region : 'east',
				height : '100%',
				split : true,
				collapsible : true,
				width : 300
			}, {
				xtype : 'panel',
				margin : '5 0 0 0',
				region : 'center',
				height : '100%'
			} ]
		} ]
	});
}());