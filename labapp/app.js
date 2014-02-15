(function() {
	Ext.application({
		name : 'LabApp',
		appFolder : '/extjs-laboratory/labapp',
		autoCreateViewport : true,

		controllers : [ 'LabControl' ]
	});
}());