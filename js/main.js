var resultado = 0 ;
var dolar = 160;
var euro = 180;


//Conversion de divisas, ejemplo con funcion y condicional.

function convertir (){
    var valore = (document.getElementById ("valor").value);
  
    if (document.getElementById ("uno").checked){
        resultado = valore / dolar;
        alert("el cambio de Pesos a Dolares es: $"+ resultado.toFixed(2));
    }
    else if (document.getElementById ("dos").checked){
        resultado = valore / euro;
        alert("el cambio de Pesos a Euros es: $"+ resultado.toFixed(2));
    }
}


//Conversion de divisas, ejemplo con ciclos.

/*alert("Bienvenide a \nFugá tu Sueldo \ncon Alejandro Martinez")
let cantidad = prompt("ingresa una valor a convertir")
let moneda = prompt("Elija la moneda \nD: Dolar \nE: Euro \nX:salir")
while (moneda!="X" && moneda!="x"){
    switch(moneda){
        case "D" && "d":
            resultado= cantidad / dolar;
            alert (cantidad + " pesos equivalen a "+ resultado.toFixed(2) + " dolares");
            break;
        case "E" && "e":
            resultado= cantidad / euro;
            alert (cantidad + " pesos equivalen a "+ resultado.toFixed(2) + " Euros");
            break;
        default:
            alert("no disponemos de esa divisa")
    }
    let seguir = prompt("queres realizar otra operacion? \nS  o  N")
    switch (seguir){
        case "S" && "s":
         cantidad = prompt("ingresa una valor a convertir")
         moneda = prompt("Elija la moneda \nD: Dolar \nE: Euro \nX:salir")
         break;
         case "N" && "n":
            moneda= "x"
            alert("ojo con el corralito")
        }
}*/


