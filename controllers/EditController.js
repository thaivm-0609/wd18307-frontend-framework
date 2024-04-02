window.EditController = function ($scope,$http,$routeParams,$location) {
    var apiUrl = 'http://localhost:3000/products';
    var id = $routeParams.id

    $scope.getDetail = function () {
        $http.get(`${apiUrl}/${id}`).then(function ($response) {
            $scope.p = $response.data; //gán cho trang chi tiết
            $scope.inputValue = {
                name: $response.data.name,
                description: $response.data.description,
                price: $response.data.price,
            }
        })
    }

    $scope.getDetail();

    $scope.onUpdate = function () {
        //lấy dữ liệu từ form
        var updateProduct = {
            ...$scope.inputValue
        }

        $http.put(
            `${apiUrl}/${id}`,
            updateProduct
        ).then(function (res) {
            if (res.status == 200) {
                $location.path('/');
            }
        })
    }
}