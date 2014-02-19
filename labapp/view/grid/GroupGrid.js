(function() {
	Ext.define('LabApp.view.grid.GroupGrid', {
		extend : 'Ext.grid.Panel',
		alias : 'widget.groupgrid',
		id : 'groupgrid',
		frame : true,
		resizable : true,
		title : 'Employee Viewer',
		width: 650,

		columns : [ {
			text : 'Name',
			dataIndex : 'name',
			flex : 1
		}, {
			text : 'Age',
			dataIndex : 'age',
			flex : 1
		} ],

		features : [ {
			ftype : 'grouping',
			groupHeaderTpl : '{columnName}: {name} ({rows.length} People)',
			startCollapsed: true,
			id: 'employeeGrouping'
		} ],

		initComponent : function() {

			this.callParent();
			
			this.groupingFeature = this.view.getFeature('employeeGrouping');

			var store = this.getStore();
			var group = store.getGroups();
			var toggleMenu = [];
			for (var i = 0; i < group.length; i++) {
				toggleMenu[i] = {
					xtype : 'menucheckitem',
					text : group[i].name,
					scope : this,
					handler: this.toggleGroup			
				};
			}

			this.addDocked({
				xtype : 'toolbar',
				dock : 'top',
				items : [ '->', {
					text : 'toggle groups...',
					menu : toggleMenu,
					destroyMenu : true
				} ]
			});
			
			this.mon(this.view,{
				groupcollapse: this.onGroupCollapse,
				groupexpand: this.onGroupExpand,
				scope: this
			});

		},

		store : Ext.create('Ext.data.Store', {
			fields : [ 'name', 'age', 'department' ],
			groupField : 'department',
			data : {
				'employees' : [ {
					"name" : "Michael Scott",
					"age" : 37,
					"department" : "Management"
				}, {
					"name" : "Dwight Schrute",
					"age" : 22,
					"department" : "Sales"
				}, {
					"name" : "Jim Halpert",
					"age" : 25,
					"department" : "Sales"
				}, {
					"name" : "Kevin Malone",
					"age" : 42,
					"department" : "Accounting"
				}, {
					"name" : "Angela Martin",
					"age" : 51,
					"department" : "Accounting"
				} ]
			},

			proxy : {
				type : 'memory',
				reader : {
					type : 'json',
					root : 'employees'
				}
			}

		}),
		
		toggleGroup: function(item){
			var group = item.text;
			if(item.checked){
				this.groupingFeature.expand(group,true);
			}else{
				this.groupingFeature.collapse(group,true);
			}
		},
		
		onGroupCollapse: function(view, htmlNode, groupName){
			//setChecked( checked, [suppressEvents] )
			//suppressEvents: true to prevent firing the checkchange events.
			this.down('menucheckitem[text='+groupName+']').setChecked(false,true);
		},
		
		onGroupExpand: function(view, htmlNode, groupName){
			this.down('menucheckitem[text='+groupName+']').setChecked(true,true);
		}
	});
}());