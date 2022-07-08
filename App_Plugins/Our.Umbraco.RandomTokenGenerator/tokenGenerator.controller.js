angular.module("umbraco").controller("tokenGeneratorController", function ($scope) {
    let myToken = uuidv4();
    $scope.aToken = myToken;

    if ($scope.model.value == "") {
        $scope.model.value = uuidv4();
    }

    $scope.getToken = function () {
        $scope.model.value = uuidv4();
    }

});

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}