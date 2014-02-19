(function() {
	Ext.define('LabApp.view.grid.GroupHeaderGrid', {
		extend : 'Ext.grid.Panel',
		alias : 'widget.groupheadergrid',
		id : 'groupheadergrid',

		title : 'Group Header Grid',
		viewConfig: {
	        stripeRows: true
	    },

		columns : [ {
			text : 'Company',
			dataIndex : 'company',
			width : 200,
			locked: true
		}, {
			text : 'Name',
			dataIndex : 'name',
			width : 200
		}, {
			text : 'Address',
			columns : [ {
				text : 'Street',
				dataIndex : 'street',
				width : 200
			}, {
				text : 'State',
				dataIndex : 'state',
				width : 100
			}, {
				text : 'Zipcode',
				dataIndex : 'zipcode',
				width : 100
			} ]
		}, {
			text : 'Age',
			dataIndex : 'age',
			width : 50
		} ],

		store : Ext.create('Ext.data.Store', {
			fields : [ 'company', 'name', 'street', 'state', 'zipcode', 'age' ],
			data : {
				'employees' : [ {
					company : 'Company 1001',
					name : 'First1 Last1',
					street : '12 Broadway',
					state : 'NY',
					zipcode : '02143',
					age : 23
				}, {
					company : 'Company 1023',
					name : 'First2 Last2',
					street : '123 Linden Street',
					state : 'MA',
					zipcode : '12345',
					age : 32
				}, {
					company : 'Company 5101',
					name : 'First5 Last5',
					street : '542 Washinton Ave',
					state : 'NC',
					zipcode : '15467',
					age : 20
				} ]
			},
			proxy : {
				type : 'memory',
				reader : {
					type : 'json',
					root : 'employees'
				}
			}
		})
	});
}());