angular.module('GaugeDemoApp', ['ui.gauge'])
.controller('GaugeCtrl', function ($scope) {
    $scope.unit = 100;
    $scope.minorUnit = 1;
    $scope.majorUnit = 5;
        $scope.options = {
            size: 300,
            scale: {
                baseLineColor: "silver",
                majorUnitColor: "grey",
                minorUnitColor: "rgba(52,152,219,.5)"
            },
            markers: [{ unit: 10, color: "yellow" }, { unit: 35, color: "green" }, { unit: 89, color: "red" }, { unit: 120, color: "orange" }]
        };
        $scope.changeOptions = function () {
            $scope.options = {
                size: 300,
                majorUnit: $scope.majorUnit,
                unit: $scope.unit,
                scale: {
                    baseLineColor: "silver",
                    majorUnitColor: "grey",
                    minorUnitColor: "rgba(52,152,219,.5)"
                },
                markers: [{ unit: 10, color: "yellow" }, { unit: 35, color: "green" }, { unit: 53, color: "red" }]
            };
        };
    })
