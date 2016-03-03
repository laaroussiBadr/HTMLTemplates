app.service('SharedData', function() {
	var appDetails = [];
	var customerDetails = [];
	var sessionDetails = [];
	return{
            getAppDetails: function(){
                return appDetails;
            },
            setAppDetails: function(value){
                appDetails=value;
            },
            getCustomerDetails :function(){
            	return customerDetails;
            },
            setCustomerDetails: function(value){
                customerDetails=value;
            },
            getSessionDetails :function(){
            	return sessionDetails;
            },
            setSessionDetails: function(value){
                sessionDetails=value;
            }
        };
});