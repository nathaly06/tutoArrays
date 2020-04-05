var almuerzos = [
    {principal:'arepa',postre:'helado'},
    {principal:'tacos',postre:'torta de queso'},
    {principal:'pizza',postre:'galletas'},
    {principal:'sushi',postre:'quesillo'}
    
    ];  //Se utiliza metdo map ,se hace una funcion anonima que recibe como parametro un elemento,por cada iteracion recibe un obj
    //map convierte objetos en strings 
    
    var platosPrincipales= almuerzos.map((perrito)=>{
       // console.log(almuerzo); imprime todos los objetos
        return perrito.principal //retur por funcion y solo accede a principal
        
    })

    console.log(platosPrincipales); //imprime un array solo con los principales.
    
    //map crea un nuevo array pero no modifica el array original