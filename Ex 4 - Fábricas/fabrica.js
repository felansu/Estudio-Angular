var fabrica = angular.module('miAplicacion' , []);

fabrica.factory('Dato', function(){
    return {informacion: 'Saludos desde la Fabrica!'};
});

function controladorA_SF($scope){
    $scope.informacion = "Controlador A - Sem fabrica";
};

function controladorB_SF($scope){
    $scope.informacion = "Controlador B - Sem fabrica";
};

function controladorA_CF($scope, Dato){
    $scope.dato = Dato;
};

function controladorB_CF($scope, Dato){
    $scope.dato = Dato;
};

