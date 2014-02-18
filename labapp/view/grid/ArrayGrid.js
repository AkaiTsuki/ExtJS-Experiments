(function(){
	Ext.define('LabApp.view.grid.ArrayGrid',{
		extend: 'Ext.grid.Panel',
		alias: 'widget.arraygrid',
		id: 'arraygrid',
		
		columns : [{
			text: 'First Name',
			flex: 1,
			dataIndex: 'firstname'
		},{
			text: 'Last Name',
			flex: 1,
			dataIndex: 'lastname'
		},{
			text: 'Age',
			flex: 1,
			dataIndex: 'age'
		},{
			text: 'Join Date',
			flex: 1,
			dataIndex: 'joindate',
			render: Ext.util.Format.dateRenderer('m/d/yyyy')
		},{
			xtype: 'actioncolumn',
			flex: 1,
			text: 'Options',
			items: [{
				iconCls: 'arraygrid-delete-icon',
				tooltip: 'delete user',
				handler: function(grid,rowInx,colInx){
					var rec = grid.getStore().getAt(rowInx);
					Ext.Msg.alert("Delete","Delete "+rec.get('firstname')+" "+rec.get('lastname'));
				}
			},{
				getClass: function(v,meta,rec){
					if(rec.get('age')>18)
						return 'arraygrid-approve-icon';
					else
						return 'arraygrid-alert-icon';
				},
				getTip: function(v,meta,rec){
					if(rec.get('age')>18)
						return 'Click to approve';
					else
						return 'Age under 18!';
				}
			}]
		}],
		
		store: Ext.create('Ext.data.Store',{
			fields:['firstname','lastname','age','joindate'],
			data:[{
				firstname: 'John', lastname:'Smith',age:23,joindate:'12/13/2013'
			},{
				firstname: 'Vek', lastname:'Kim',age:13,joindate:'02/13/2014'
			},{
				firstname: 'Chadwick', lastname:'Adrienne',age:15,joindate:'12/16/2005'
			}]
		})
	});
}());