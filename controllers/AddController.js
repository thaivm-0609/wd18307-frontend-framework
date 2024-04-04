window.AddController = function ($scope,$http,$location) {
    var apiUrl = 'http://localhost:3000/products';
    var brandUrl = 'http://localhost:3000/brands';
    
    $http.get(brandUrl).then(function (res) {
        $scope.brands = res.data;
    })

    $scope.onSubmit = function () {
        //khởi tạo biến valid để kiểm tra dữ liệu hợp lệ
        var valid = true;
        //kiểm tra trường name
        if (!$scope.inputValue //không tồn tại inputValue
            || !$scope.inputValue.name //inputValue.name trống
            || $scope.inputValue.name.length < 6 //inputValue.name ít hơn 6 ký tự
            || $scope.inputValue.name.length >100 //inputValue.name nhiều hơn 100 ký tự
        ) {
            valid = false;
        }
        //kiểm tra trường description
        if (!$scope.inputValue || !$scope.inputValue.description) {
            valid = false;
        }
        //kiểm tra trường price
        if (!$scope.inputValue || !$scope.inputValue.price //không tồn tại
            || isNaN($scope.inputValue.price) //không phải kiểu số
            || $scope.inputValue.price < 0 //là số âm
        ) {
            valid = false;
        }

        if (valid) {
            //lấy dữ liệu từ form
            var newProduct = {
                ...$scope.inputValue
            }

            $http.post(
                apiUrl,
                newProduct
            ).then(function ($response) {
                if ($response.status == 201) {
                    $location.path('/');
                }
            }, function (errors) {
                console.log(errors);
            })
        } else {
            alert('Dữ liệu không hợp lệ');
        }
    }
}
