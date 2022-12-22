let resultado = 0 ;
let dolar = 160;
let euro = 180;


//Conversion de divisas, ejemplo con funcion y condicional.

function convertir (){
    let valore = (document.getElementById ("valor").value);
  
    if (document.getElementById ("uno").checked){
        resultado = valore / dolar;
        alert("el cambio de Pesos a Dolares es: $"+ resultado.toFixed(2));
    }
    else if (document.getElementById ("dos").checked){
        resultado = valore / euro;
        alert("el cambio de Pesos a Euros es: $"+ resultado.toFixed(2));
    }
}


class exchanges{
    constructor(id,nombre,liquidez,visitas,puntuacion){
      this.id = id;
      this.nombre = nombre;
      this.liquidez = liquidez;
      this.visitas = visitas;
      this.puntuacion = puntuacion;
      
    }
  }
  
  const exchange1 = new exchanges(1,'Kukoin' , 502 , 1.900432 , 6.6);
  const exchange2 = new exchanges(2,'Bitstamp', 573, 254.173 , 6.5);
  const exchange3 = new exchanges(3,'Kraken' , 758 , 978.767 , 7.6);
  const exchange4 = new exchanges(4,'Binance' , 958,15.017449, 9.9);
  const exchange5 = new exchanges(5,'Coinbase exchange', 801.925 , 724 , 8.2);
  
  const exchangeslist = [exchange1,exchange2,exchange3,exchange4,exchange5];
  const exchangeMayor = exchangeslist.sort((b, a) => a.puntuacion - b.puntuacion)[0];
  const exchangeMenor = exchangeslist.sort((a, b) => a.puntuacion- b.puntuacion)[0];
  
  console.log("Mayor puntuacion",exchangeMayor);
  console.log("Menor puntuacion",exchangeMenor); 
  console.log("ranking por puntos", exchangeslist.sort((b, a) => a.puntuacion - b.puntuacion));
 


//Conversion de divisas, ejemplo con ciclos.

/*alert("Bienvenido a \nconversion de divisas \ncon Alejandro Martinez")
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
            alert("que tengas buen dia, saludos al dolar blue")
        }
}*/

//eliminar primer y ultimo elemnto con POP y shift
/*const nombres = ["luis","ana","ale","romi"]
nombres.pop ()
console.log (nombres)
nombres.shift ()
console.log (nombres)*/


