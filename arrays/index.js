var almuerzos = [
{principal:'arepa',postre:'helado'},
{principal:'tacos',postre:'torta de queso'},
{principal:'pizza',postre:'galletas'},
{principal:'sushi',postre:'quesillo'}

];  //array casa entrada es un objeto

var platosPrincipales=[];

for(var i=0;i<almuerzos.length;i++){
    platosPrincipales.push(almuerzos[i].postre);
}

console.log(platosPrincipales);


console.log(platosPrincipales[1]);


//metodo push es para agregar,el output ahora es un array.