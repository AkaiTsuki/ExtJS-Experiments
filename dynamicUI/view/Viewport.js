(function() {
	Ext.define("DYNAMICUI.view.Viewport", {
		extend : "Ext.container.Viewport",
		requires: ['DYNAMICUI.view.PanelContainer'],
		mixins: [ 'Deft.mixin.Controllable'],
		controller: 'DYNAMICUI.controller.LayoutController',
		layout : 'fit',

		items : [ {
			xtype : 'panel',
			width : '100%',
			height : '100%',
			title : 'Dynamic UI Loading from Back-end Data',

			items : [ {
				xtype : 'panelcontainer',
				itemId: 'mainContainer',
			} ]
		} ]
	});
}());