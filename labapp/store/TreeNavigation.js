(function() {
	Ext.define('LabApp.store.TreeNavigation', {
		extend : 'Ext.data.TreeStore',
		model : 'LabApp.model.Experiment',
		
		root: {
			text: 'Experiments',
			expended: true
		},
		
		proxy: {
            type: 'ajax',
            url: 'data/experiments.json',
            reader:{
            	type: 'json',
            	root: 'children',
            	successProperty: 'success'
            }
		} 
	});
}());