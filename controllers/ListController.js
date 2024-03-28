window.ListController = function ($scope,$http,$location) {
    var apiUrl = 'http://localhost:3000/products';
    //khai bao ham
    $scope.getProducts = function () {
        $http.get(apiUrl).then(function ($response) {
            // console.log($response.data);
            $scope.products = $response.data;
        })
    }

    $scope.getProducts(); //gọi hàm (thực thi)

    $scope.onDetail = function (id) {
        $location.path(`/detail/${id}`);
    }
}