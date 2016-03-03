var SessionController = app.controller('SessionController', function ($scope, $filter, SharedData,filteredListServiceSession) {

	$scope.pageSize = 4;
    $scope.allItems = getSessionData(); 
    $scope.reverse = false;
 
    $scope.resetAll = function () {
        $scope.filteredList = $scope.allItems;
        if(typeof SharedData.getSessionDetails().UID==='undefined')
            $scope.searchText = '';
        else
            $scope.searchText = String(SharedData.getSessionDetails().UID);
        SharedData.setSessionDetails([]);
        $scope.currentPage = 0;
        $scope.Header = ['',''];
    }

    $scope.search = function () {
        $scope.filteredList = filteredListServiceSession.searched($scope.allItems, $scope.searchText);
        
        if ($scope.searchText == '') {
            $scope.filteredList = $scope.allItems;
        }
        $scope.pagination(); 
    }

    $scope.pagination = function () {
        $scope.ItemsByPage = filteredListServiceSession.paged( $scope.filteredList, $scope.pageSize );         
    };

    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    $scope.firstPage = function () {
        $scope.currentPage = 0;
    };

    $scope.lastPage = function () {
        $scope.currentPage = $scope.ItemsByPage.length - 1;
    };

    $scope.range = function (input, total) {
        var ret = [];
        if (!total) {
            total = input;
            input = 0;
        }
        for (var i = input; i < total; i++) {
            if (i != 0 && i != total - 1) {
                ret.push(i);
            }
        }
        return ret;
    };
    
    $scope.sort = function(sortBy){
        $scope.resetAll();  

        $scope.columnToOrder = sortBy; 
        $scope.search();
        $scope.filteredList = $filter('orderBy')($scope.filteredList, $scope.columnToOrder, $scope.reverse); 

        if($scope.reverse)
             iconName = 'glyphicon glyphicon-chevron-up';
         else
             iconName = 'glyphicon glyphicon-chevron-down';
              
        if(sortBy === 'UID')
        {
            $scope.Header[0] = iconName;
        }
        if(sortBy === 'OSInfo')
        {
            $scope.Header[1] = iconName;
        }
         
        $scope.reverse = !$scope.reverse;   
        
        $scope.pagination();    
    };
    
    $scope.sort ('UID');

});

SessionController.$inject = ['$scope', '$filter','SharedData','filteredListServiceSession'];

function searchUtilSession(item, toSearch) {
    return (item.OSInfo.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 ||  item.UID == toSearch) ? true : false;
}

function getSessionData() {
    
    return [

    	{
    		UID:1,
            OSInfo: 'Chrome'
   	    },
   	    {
    		UID:2,
            OSInfo:'Firefox'
   	    },
   	    {
    		UID:3,
            OSInfo:'IE'
   	    },
        {
            UID:3,
            OSInfo:'IE'
        }
    ];
    
}