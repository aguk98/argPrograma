switch(1+1==3){
    case true:
        console.log("verdadero");
        break;
    case false:
        console.log("falso");
        break;
}


function aleluya(a, b){

    console.log(a+b);
}

aleluya(1, 2);

for (var i = 0; i <=10; i ++) {

    console.log ("Número:" + i);

}

let resultado = '';

let i = 0;

 

do {

  i = i + 1;

  resultado = resultado + i;

} while (i <5);

 

console.log (resultado);

let L = [10, 11, 3, 20, 5];

console.log(L.filter(i => i>10));
console.log(L.find(i => i>10));
console.log(L.includes(20));
console.log(L.indexOf(5));

console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

function sequentialSearch(element, array){

    for (var i in array){
  
      if (array[i] == element) return i; 
  
    }
  
    return -1;
  
  }
  
   var letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
  
  sequentialSearch("g",letters);


