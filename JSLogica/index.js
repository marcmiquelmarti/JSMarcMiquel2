//Exercici 1
// var num = 70;

// if ((num % 3) == 0) {
//     console.log(num + ' és multiple de 3');
// }
// else if ((num % 7) == 0) {
//     console.log(num + ' és multiple de 7');
// }
// else {
//     console.log(num + ' no és multiple de 3 ni de 7')
// }

// //Exercici 2
// var x = 51;
// var y = 35;

// var resultat = (x >= 10 && x <= 50)
//     ? "Esta dins del rang"
//     : "Esta fora del rang"
// var resultat1 = (y >= 10 && y <= 50)
//     ? "Esta dins del rang"
//     : "Esta fora del rang"

// console.log(resultat)
// console.log(resultat1)

//Exercici 3
// var x = prompt('Tecleja el numero de la nota que has tret: ')

// switch (true) {
//     case (x <= 4.99 && x >= 0):
//         alert('Suspés')
//         break;
//     case (x >= 5 && x <= 5.99):
//         alert('Suficient')
//         break;
//     case (x >= 6 && x <= 6.99):
//         alert('Bé')
//         break;
//     case (x >= 7 && x <= 8.99):
//         alert('Notable')
//         break;
//     case (x >= 9 && x <= 10):
//         alert('Excel·lent')
//         break;
// }
// console.log(x);

//Exercici 4

// var x = prompt('Tecleja un numero: ')

// var trobat = false;
// var total=1;
// var aux2=2;
// while (!trobat) {
//     total = total + aux2;
//     aux2 = aux2 + 1;
//     trobat = total == x
// }
// console.log(aux2 -1 );


// //EXercici 5

// let cadena = "a8ded5e12";
// let suma = 0;

// for (i = 0; i < cadena.length; i++){
//     if (Number(cadena[i])) {
//         suma += Number(cadena[i])
//     }
// }
// document.write(suma);



// var str = prompt("introduzca un valor per 'x'");
// var numero = parseInt(str);
//     if(numero >= 10){
//         var suma = 0;
//         for (var n in str) 
//           suma += parseInt(str[n]);
//           alert(suma);
// }
// else
// {
//   alert(numero);
// }


//Execici 6

// var x = 5;
// var y = 10;
// var z = 4;

// if (x > y && x > z) {
// document.write(x);
// } else if (y > z) {
// document.write(y);
// } else {
// document.write(z);
// }

//Exerici 7

    //No se com fer-l'ho

//Exercici 8

    //No se com fer-l'ho

//Exercici 9

// let suma = 0;
// let i = 0;
// let limit = 1000;

// do {
//     i++;
//     if (i % 3 === 0 && i % 5 === 0) {
        
//     }
// }

//Exercici 10

// for (i = 1; i <= 5; i++){
//     for (j = 1; j < i + 1; j++){
//         if (i % 2 === 0) {
            
//         }
//     }
// }

//Exercici 11

// function cambiarNumeros() {
//     var numero = 235654;
//     var array = Array.from([2, 3, 5, 6, 4]);
//     console.log(array);
//     var count = 0;

//     for (var i = 0; i < array.length - count; i++){
//         if (i % 2 !== 0) {
//             var temp = array[i];
//             array[i] = array[i - 1];
//             array[i - 1] = temp;
//         }
//     }
//     console.log(array);
// }
// cambiarNumeros();
