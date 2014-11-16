/*
Ex 1
* - Creamos la función 'controladorTareas'
* - $scope es utilizado para almacenar datos entre la view y el controlador
* - En este ejemplo, creamos um objeto llamado tareas que tiene dos objetos
* - Cada objeto contiene dos variables, descripcion y realizada.
*
Ex 2
* - Creamos función 'nuevaTarea' para incluir (push) una nueva tarea a la lista de tareas.
* - Creada la función 'limpiarTareas', realiza una copia de la lista actual y filtra por las tareas no realizadas.
* - Creada la función 'contarTareasRestantes', suma 1 al contador si la variable 'realizada' es 'true'
*
*/
function controladorTareas($scope){
    $scope.tareas = [   {descripcion:'Estudiar angular JS', realizada:true},
                        {descripcion:'Estuadiar Java', realizada:false}];

    $scope.nuevaTarea = function () {
        $scope.tareas.push({descripcion:$scope.descripcion, realizada:false});
        $scope.descripcion = '';
    }

    $scope.limpiarTareas = function () {
        var tareasAntiguas = $scope.tareas;
        $scope.tareas = [];

        /*
         * ForEach tipico, recorre todas las tareas antiguas y si no está realizada, devuelvela para la lista 'tareas'
         */
        angular.forEach(tareasAntiguas, function(tarea){
            if(!tarea.realizada) $scope.tareas.push(tarea);
        });
    };

    $scope.contarTareasRestantes = function () {
        var contadorTareasRestantes = 0;
        angular.forEach($scope.tareas, function(tarea){
           contadorTareasRestantes += tarea.realizada ? 1 : 0;
        });
        return contadorTareasRestantes;
    };

}