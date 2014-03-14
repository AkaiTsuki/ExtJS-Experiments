Ext.define('DYNAMICUI.store.LayoutStore', {
	extend : 'Ext.data.Store',
	fields : [ 'widgetId', 'width','height','columns' ],
	proxy: {
        type: 'ajax',
        url: 'data/layoutdata.json',
        reader:{
        	type: 'json'
        }
	}
});