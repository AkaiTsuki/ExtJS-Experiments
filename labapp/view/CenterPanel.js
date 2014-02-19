(function() {
	Ext.define('LabApp.view.CenterPanel', {
		extend : 'Ext.panel.Panel',
		alias : 'widget.centerpanel',
		id: 'centerpanel',
		margin : '5 0 0 0',
		title : 'Demo',
		height : '100%',
		bodyPadding: 10,
		autoScroll: true,
		items:[{
			xtype: 'panel',
			html: "This site is only for learning ExtJS. It should not be used in commercial purpose.",
			bodyPadding: 10
		}]
	});
}());