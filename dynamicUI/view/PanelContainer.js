(function() {
	Ext.define('DYNAMICUI.view.PanelContainer', {
		extend : 'Ext.container.Container',
		alias : 'widget.panelcontainer',
		
		
		margin : '5 0 0 0',
		height : '100%',
		autoScroll: true,
		bodyPadding: 10,
		layout:{
			type:'vbox',
			align:'left',
			defaultMargins: '0 0 10 0'
		}
		
	});
}());