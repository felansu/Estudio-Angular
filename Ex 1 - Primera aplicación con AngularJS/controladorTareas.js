/*
* - Creamos la función 'controladorTareas'
* - $scope es utilizado para almacenar datos entre la view y el controlador
* - En este ejemplo, creamos um objeto llamado tareas que tiene dos objetos
* - Cada objeto contiene dos variables, descripcion y realizada.
*/
function controladorTareas($scope){
    $scope.tareas = [   {descripcion:'Estudiar angular JS', realizada:true},
                        {descripcion:'Estuadiar Java', realizada:false}
                    ];
}