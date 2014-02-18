(function(){
	Ext.define('LabApp.view.panel.BasicPanel',{
		extend: 'Ext.panel.Panel',
		alias: 'widget.basicpanel',
		id: 'basicpanel',
		
		bodyStyle:{"background-color":"#eee"},
		autoScroll: true,
		
		layout: {
			type: 'table',
			columns: 3,
			tdAttrs: {
				style: 'padding: 10px;'
			}
		},
		
		defaults:{
			xtype: 'panel',
			width: 200,
			height: 200,
			bodyPadding: 10
		},
		
		items:[{
			html: 'Basic Panel'
		},{
			html: "This panel has a title bar",
			title: 'Panel with Title'
		},{
			html: "This panel has a title bar with tool dock buttons",
			title: 'Panel with Tool Docks',
			tools: [{
				type: 'pin'
			},{
				type: 'refresh'
			},{
				type: 'search'
			},{
				type: 'save'
			}]
		},{
			title:'Collapsible Panel',
			collapsible: true,
			collapsed: false,
			colspan: 3,
			width: 640,
			html: 'This panel is a collapsible panel'
		},{
			title:'Collapsible Framed Panel',
			collapsible: true,
			collapsed: false,
			colspan: 3,
			width: 640,
			html: 'This panel is a collapsible framed panel',
			frame : true
		}]
	});
}());