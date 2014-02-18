(function() {
	Ext.application({
		name : 'LabApp',
		appFolder : '../labapp',
		autoCreateViewport : true,

		controllers : [ 'LabControl' ]
	});
}());