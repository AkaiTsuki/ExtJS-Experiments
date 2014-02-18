(function(){
	Ext.define("LabApp.model.Experiment",{
		extend : 'Ext.data.Model',
		fields:[{
			name: 'id', type: 'int'
		},{
			name: 'text', type: 'string'
		},{
			name: 'leaf', type: 'boolean', defaultValue: false
		},{
			name: 'expanded', defaultValue: true
		},{
			name: 'panelname',type:'string'
		}]
	});
}());