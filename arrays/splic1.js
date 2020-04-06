
var cosas =['escoba', 'pokemon', 'depa' ,'casa' ,'mesa' ,'cama' ,'compu'];
console.log(cosas);

cosas.splice(3,0,'yannis','lap top');//splice agrega 3 es la posicion y 0 porque no esta eliminando nada porque agrega
console.log(cosas);


cosas.splice(6,2);//con el nuevo array en la posicion 6 comienza a cortar y elimina 2 elementos
console.log(cosas);


//si se quiere iniciar a cortar de atras para delante se utilizan numeros negativos
//['escoba',  'pokemon', 'depa',    'yannis', 'lap top', 'casa','compu'] nuevo array

cosas.splice(-3,2); 
console.log(cosas);

//[ 'escoba', 'pokemon', 'depa', 'yannis', 'compu' ] Apartir de -3 y corta dos

