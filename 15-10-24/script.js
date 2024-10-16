
alert('hola')
/*definición de una funcion 

function hello(){
    console.log("Hola clase");
    console.log("5IV7");

}

//llamada a la función 
hello();
hello();
hello();
hello();
hello();


function hello(){
    console.log('123');
    return("hola clase");

}

const result = hello()

console.log(result);




function hello(){
    return function(){
        return "hola, soy la funcion 2";
    }
}

console.log(hello()())


//parametros

function add(x){
    console.log(x);
}

add(5)


function(x,y){
    console.log(x,y);
}

add(5,10)




//multiples parametros

function add(x,y=0){

    console.log(x+y)
}

add(5, undefined)



//control de error en multiples parametros 

function add(x,y){

    if(y==undefined){
        y=0;
    }

    console.log(x+y);
}

add(5,undefined)
*/

/*
//parametro de tipo cadena 

function add(name){
    console.log('hola' + name);
}

add("clase Js");
*/

//objetos

const user = {
    nombre:'Alvarado',
    apellidoP:'Reyes',
    apellidoM:'Quiroz',
    edad:91,
    direccion:{
        calle:'Nicolas bravo',
        no: 598,
        colonia:'Narvarte',
        delegacion:'los pinos'
    },
    amigos:['Sky','Miriam'],  
    activo:true
}

//consola nombre, apellido P, M
console.log(user);
//alert activo
//consola edad
//alert calle no colonia delegacion
//consola amigos 

function ejercicio(user){

    console.log(user.nombre+ '' +user.apellidoP + '' + user.apellidoM);
    console.log('edad:' + user.edad);
    console.log(user.amigos);

    if (user.activo = true){
        alert ('usuario activo');

    }
    else{
        if(user.activo= false){
            alert('Usuario inactivo'):
        }
    }
}

alert(user.direccion.calle + '' + user.direccion.nombre + '' + user.direccion.colonia + '' + user.direccion.delegacion);

ejercicio(user);