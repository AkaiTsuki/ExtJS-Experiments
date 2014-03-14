(function() {
	Ext.define('DYNAMICUI.view.MyGridPanel', {
		extend : 'Ext.grid.Panel',
		alias : 'widget.mygridpanel',
		mixins: [ 'Deft.mixin.Controllable'],
		controller: 'DYNAMICUI.controller.MyGridPanelController'
	});
}());