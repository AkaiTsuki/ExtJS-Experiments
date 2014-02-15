(function() {
	Ext.define('LabApp.view.base.TreeNavigation', {
		extend : 'Ext.tree.Panel',
		alias : 'widget.treenavigation',

		title : 'All Experiments',
		height : '100%',
		width : 300,
		margin : '5 0 0 0',

		rootVisible : false,
		store : 'TreeNavigation'

	});
}());