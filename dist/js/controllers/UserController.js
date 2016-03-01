var UserController = app.controller('UserController', function ($scope, $filter, filteredListServiceUser) {
 
    $scope.pageSize = 4;
    $scope.allItems = getDummyData(); 
    $scope.reverse = false;
 
    $scope.resetAll = function () {
        $scope.filteredList = $scope.allItems;
        $scope.searchText = '';
        $scope.currentPage = 0;
        $scope.Header = ['','','','',''];
    }

    $scope.search = function () {
        $scope.filteredList = 
       filteredListServiceUser.searched($scope.allItems, $scope.searchText);
        
        if ($scope.searchText == '') {
            $scope.filteredList = $scope.allItems;
        }
        $scope.pagination(); 
    }

    $scope.pagination = function () {
        $scope.ItemsByPage = filteredListServiceUser.paged( $scope.filteredList, $scope.pageSize );         
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
              
        if(sortBy === 'EmpId')
        {
            $scope.Header[0] = iconName;
        }
        if(sortBy === 'Email')
        {
            $scope.Header[2] = iconName;
        }

        else if(sortBy === 'name')
        {
            $scope.Header[1] = iconName;
        }
        else if(sortBy === 'Role')
        {
            $scope.Header[3] = iconName;
        }
        else 
        {
            $scope.Header[4] = iconName;
        }
         
        $scope.reverse = !$scope.reverse;   
        
        $scope.pagination();    
    };
    
    $scope.sort ('name');  
    
});

UserController.$inject = ['$scope', '$filter','filteredListServiceUser'];

function searchUtil(item, toSearch) {
    /* Search Text in all 3 fields */
    return (item.Phone.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.Email.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.EmpId == toSearch) ? true : false;
}

function getDummyData() {
    return [
    {
        EmpId: 2,
        name: 'LAAROUSSI BADR-EDDINE',
        Email: 'badreddinelaaroussi@gmail.com',
        Phone: '0622439807',
        Role: 'STAGIARE'
    },
    {
        EmpId: 1,
        name: 'BELLOUTI SANAE',
        Email: 'sanaeBellouti@gmail.com',
        Phone: '0000000000',
        Role: 'STAGIARE'
    }, 
    {
        EmpId: 3,
        name: 'DISSI MUSTAPHA',
        Email: 'dissimustaphe@gmail.com',
        Phone: '111111111',
        Role: 'STAGIARE'
    }, 
    {
        EmpId: 4,
        name: 'OULAIKA AYOUB',
        Email: 'OULAIKAAYOUB@gmail.com',
        Phone: '2222222222',
        Role: 'STAGIARE'        
    },
        {
        EmpId: 2,
        name: 'LAAROUSSI BADR-EDDINE',
        Email: 'badreddinelaaroussi@gmail.com',
        Phone: '0622439807',
        Role: 'STAGIARE'
    },
    {
        EmpId: 1,
        name: 'BELLOUTI SANAE',
        Email: 'sanaeBellouti@gmail.com',
        Phone: '0000000000',
        Role: 'STAGIARE'
    }, 
    {
        EmpId: 3,
        name: 'DISSI MUSTAPHA',
        Email: 'dissimustaphe@gmail.com',
        Phone: '111111111',
        Role: 'STAGIARE'
    }, 
    {
        EmpId: 4,
        name: 'OULAIKA AYOUB',
        Email: 'OULAIKAAYOUB@gmail.com',
        Phone: '2222222222',
        Role: 'STAGIARE'        
    },
            {
        EmpId: 2,
        name: 'LAAROUSSI BADR-EDDINE',
        Email: 'badreddinelaaroussi@gmail.com',
        Phone: '0622439807',
        Role: 'STAGIARE'
    },
    {
        EmpId: 1,
        name: 'BELLOUTI SANAE',
        Email: 'sanaeBellouti@gmail.com',
        Phone: '0000000000',
        Role: 'STAGIARE'
    }, 
    {
        EmpId: 3,
        name: 'DISSI MUSTAPHA',
        Email: 'dissimustaphe@gmail.com',
        Phone: '111111111',
        Role: 'STAGIARE'
    }, 
    {
        EmpId: 4,
        name: 'OULAIKA AYOUB',
        Email: 'OULAIKAAYOUB@gmail.com',
        Phone: '2222222222',
        Role: 'STAGIARE'        
    }
    ];
}