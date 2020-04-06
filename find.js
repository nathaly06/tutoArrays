const productos=[
    {nombre:'trapeador',precio:60 ,departamento:'hogar'},
    {nombre:'tablet', precio:4000 ,departamento:'computacion'},
    {nombre:'taza', precio:90 ,departamento:'hogar'},    
    {nombre:'colcha', precio:300, departamento:'hogar'},
    {nombre:'cafe', precio:120 ,departamento:'alimentos'},
    {nombre:'cuaderno' ,precio:30 ,departamento:'papeleria'}
]
//El metodo find hace una primera busq
const taza = productos.find(product=>{

    return product.nombre === 'taza'
})

console.log(taza)
/*
**********Es lo mismo******

const taza= productos.find(function(product){
    return product.nombre === 'taza'
})
console.log(taza);*/
