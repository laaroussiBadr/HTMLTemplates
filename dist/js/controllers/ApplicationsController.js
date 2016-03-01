var AppController = app.controller('AppController', function ($scope, $filter, filteredListServiceApp) {

	$scope.pageSize = 4;
    $scope.allItems = getData(); 
    $scope.reverse = false;
 
    $scope.resetAll = function () {
        $scope.filteredList = $scope.allItems;
        $scope.searchText = '';
        $scope.currentPage = 0;
        $scope.Header = ['','','','','',''];
    }

    $scope.search = function () {
        $scope.filteredList = 
       filteredListServiceApp.searched($scope.allItems, $scope.searchText);
        
        if ($scope.searchText == '') {
            $scope.filteredList = $scope.allItems;
        }
        $scope.pagination(); 
    }

    $scope.pagination = function () {
        $scope.ItemsByPage = filteredListServiceApp.paged( $scope.filteredList, $scope.pageSize );         
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
             
        //$Filter - Standard Service
        $scope.filteredList = $filter('orderBy')($scope.filteredList, $scope.columnToOrder, $scope.reverse); 

        if($scope.reverse)
             iconName = 'glyphicon glyphicon-chevron-up';
         else
             iconName = 'glyphicon glyphicon-chevron-down';
              
        if(sortBy === 'AppSIP')
        {
            $scope.Header[1] = iconName;
        }
        if(sortBy === 'AppSIC')
        {
            $scope.Header[0] = iconName;
        }

        else if(sortBy === 'Domain')
        {
            $scope.Header[2] = iconName;
        }
        else if(sortBy === 'CreationDate')
        {
            $scope.Header[3] = iconName;
        }
        else if(sortBy === 'Type')
        {
            $scope.Header[4] = iconName;
        }
        else 
        {
            $scope.Header[5] = iconName;
        }
         
        $scope.reverse = !$scope.reverse;   
        
        $scope.pagination();    
    };
    
    $scope.sort ('ServerStatus');  

});

AppController.$inject = ['$scope', '$filter','filteredListServiceApp'];

function searchUtilApp(item, toSearch) {
    /* Search Text in all 3 fields */
    return (item.Type.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.ServerStatus.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.Domain.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 ||  item.AppSip == toSearch ||  item.AppSic == toSearch) ? true : false;
}

function getData() {
    
    return [

    	{
    		AppSic:12,
    	 	AppSip:54,
    	    Domain:'.com',
   	        CreationDate:new Date(),
   	        Type : 'Type1',
   	        ServerStatus: 'Up'
   	    },
   	    {
    		AppSic:545,
    	 	AppSip:845,
    	    Domain:'.fr',
   	        CreationDate:new Date(),
   	        Type : 'Type2',
   	        ServerStatus: 'Down'
   	    },
   	    {
    		AppSic:48,
    	 	AppSip:8745,
    	    Domain:'.co.uk',
   	        CreationDate:new Date(),
   	        Type : 'Type3',
   	        ServerStatus: 'Up'
   	    }

    ];
    
}