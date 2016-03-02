app.service('SharedData', function() {
	var appDetails = [];
	return{
            getAppDetails: function(){
                return appDetails;
            },
            setAppDetails: function(value){
                appDetails=value;
            }
        };
});