(function() {
	Ext.define('DYNAMICUI.controller.LayoutController', {
		extend: "Deft.mvc.ViewController",
		mixins: [ 'Deft.mixin.Injectable' ],
		
		control:{
			mainContainer: {
				
			}
		},

		init : function() {
			console.log("Controller init..");
			var me = this;
			var mainContainer = me.getMainContainer();
			
			Ext.Ajax.request({
			    url: 'data/layoutdata.json',
			    method:'GET',
			    success: function(response, opts) {
			        var obj = Ext.decode(response.responseText);		        
			        
			        obj.forEach(function(config){
			        	var panel=me.buildWidgets(config);
			        	mainContainer.add(panel);
			        });
			        
			    },
			    failure: function(response, opts) {
			        console.log('server-side failure with status code ' + response.status);
			    }
			});
		},

		buildWidgets : function(config) {
			var store =  Ext.create('Ext.data.Store',{
				fields : [ 'firstname', 'lastname','age','gender' ],
				autoLoad: true,
				proxy: {
			        type: 'ajax',
			        url: 'data/persondata.json',
			        reader:{
			        	type: 'json'
			        }
				}
			});
			
			var panel = Ext.create('DYNAMICUI.view.MyGridPanel', {
				title : 'This panel is dynamic build!',
				width : config.width,
				widgetId : config.widgetId,
				height: config.height,
				columns: config.columns,
				store:store,
				bbar: [{
					xtype: 'pagingtoolbar',
					store: store,
					dock: 'bottom',
			        displayInfo: true,
			        border: false
				}]
			});
			return panel;
		}
	});
}());