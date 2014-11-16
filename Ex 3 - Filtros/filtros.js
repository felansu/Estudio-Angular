function filtrosControlador($scope){

    $scope.empleados = [
        {
            nombre:'Afrain', apellido:'Gonzalez', segundoApellido:'Alonso', altura:1.72,
            salario:'100', telefono:'9191919191', fechaRegistro: new Date()
        },
        {
            nombre:'Lucas', apellido:'Gonzalez', segundoApellido:'Alonso', altura:1.72,
            salario:'100', telefono:'9191919191', fechaRegistro: new Date()
        },
        {
            nombre:'Alberto', apellido:'Gonzalez', segundoApellido:'Alonso', altura:1.72,
            salario:'100', telefono:'9191919191', fechaRegistro: new Date()
        },
        {
            nombre: 'Valiente', apellido: 'Gonzalez', segundoApellido: 'Alonso', salario: '100',
            telefono: '9191919191', fechaRegistro: new Date()
        },
        {
            nombre: 'Raul', apellido: 'Gonzalez', segundoApellido: 'Alonso', salario: '100',
            telefono: '9191919191', fechaRegistro: new Date()
        },
        {
            nombre: 'Ferran', apellido: 'Gonzalez', segundoApellido: 'Alonso', salario: '100',
            telefono: '9191919191', fechaRegistro: new Date()
        }
    ];
    
    $scope.ordenarPor = function (orden) {
        $scope.ordenSelecionado = orden;
    }

};