var CustomerController = app.controller('CustomerController', function ($scope, $filter, filteredListServiceCustomer) {
    $scope.customer='';
    $scope.pageSize = 4;
    $scope.allItems = getData(); 
    $scope.reverse = false;

    $scope.resetAll = function () {
        $scope.filteredList = $scope.allItems;
        $scope.searchText = '';
        $scope.currentPage = 0;
        $scope.Header = ['','','','',''];
    }

    $scope.search = function () {
        $scope.filteredList = 
        filteredListServiceCustomer.searched($scope.allItems, $scope.searchText);
        
        if ($scope.searchText == '') {
            $scope.filteredList = $scope.allItems;
        }
        $scope.pagination(); 
    }

    $scope.pagination = function () {
        $scope.ItemsByPage = filteredListServiceCustomer.paged( $scope.filteredList, $scope.pageSize );         
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

       if(sortBy === 'UID')
       {
        $scope.Header[0] = iconName;
    }
    else if(sortBy === 'Email')
    {
        $scope.Header[2] = iconName;
    }

    else if(sortBy === 'fullName')
    {
        $scope.Header[1] = iconName;
    }
    else if(sortBy === 'Country')
    {
        $scope.Header[3] = iconName;
    }


    $scope.reverse = !$scope.reverse;   

    $scope.pagination();    
};

$scope.sort ('UID');  

    /////////////////Modal////////////

    $scope.hideModalsup = function(){
        $('#Modalsup').modal('hide');
    }
    $scope.showModalsup = function(c){
       $scope.customer=U;
       $('#Modalsup').modal('show');

   }
    $scope.hideModal = function(){
    $('#myModal').modal('hide');

    }
    $scope.showModal = function(c){

    $scope.customer=c;
    $('#myModal').modal('show');

}

$scope.showModalreset = function(c){

    $scope.customer=c;
    $('#myModalreset').modal('show');

}
 $scope.hideModalreset = function(){
    $('#myModalreset').modal('hide');
}

});

CustomerController.$inject = ['$scope', '$filter','filteredListServiceCustomer'];

function searchUtilCustomer(item, toSearch) {
    /* Search Text in all 3 fields */
    return (item.fullName.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.Email.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 ||item.UID == toSearch) ? true : false;
}







    ///////////////DATA///////////////////

    function getData() {
        return [
        {
            UID: 1,
            fullName: 'Ikhlass EDDINE',
            Email: 'Ikhlas@gmail.com',
            Country: 'Morroco'

        },
        {
            UID: 3,
            fullName: 'hajar benslmail',
            Email: 'hajar@gmail.com',
            Country: 'Morroco'

        },
        {
            UID: 4,
            fullName: 'Imane chedki',
            Email: 'iman@gmail.com',
            Country: 'USA'

        },
        {
            UID: 5,
            fullName: 'Badr EDDINE',
            Email: 'badr@gmail.com',
            Country: 'Morroco'

        },
        {
            UID: 6,
            fullName: 'Ayoub Oulaika',
            Email: 'ayoub@gmail.com',
            Country: 'Morroco'

        }

        ];
    }