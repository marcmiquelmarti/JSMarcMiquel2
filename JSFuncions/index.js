// Exercici 1
// function informacio(name) {
//     return name
// }

// console.log(informacio('Marc Miquel Marti'));

//Exercici 2
// function exemple(a) {
//     console.log(a)
// }

// var a = 'test'
// console.log(exemple(a) + "  " + typeof a)

//Exercici 3
// function currentDate(data){
//     document.write(data.getDate() + "/" + data.getMonth + "/" + data.getFullYear())
// }
// const data = new Date()
// console.log(data)

//Exercici 4
// function variables(x) {
//     var x = 54321
// }

// console.log(x)

//Ens dona error ja que si definim la variable dins de la funció, 
//si demanes algu fora de la funcio no sevira perque sortia com "Undefined"


//Exercici 5
// function comptaCaracters(paraula) {
//     console.log(paraula.length)
// }

// var paraula = 'Paraula de test'
// console.log(comptaCaracters(paraula))

// //Exercici 6
// function defaultNumber(a, b, c = 5) {
//     return a + b + c
// }

// console.log(defaultNumber(3, 8));

//Exercici 7
// function currentDate(data){
//     document.write(data.getDate() + "/" + data.getMonth + "/" + data.getFullYear())
// }
// const data = new Date()

// function dataAndNumber() {
//     console.log(data)
//     console.log(defaultNumber(3, 8));
// }
// console.log(dataAndNumber());

//Exercici 8
// var a = 5;
// var b = 15;
// function numbers() {
//     if (a == 30 || b == 30 || a + b == 30) {
//         return true;
//         console.log('Es 30')
//     }
//     else {
//         return false;
//         console.log('ERROR')
//     }
// }
// console.log(numbers());

//Exercici 9
// var a, b;
// a = 15;
// b = 15;
// var resultat = function () {
//     if (a == 30 || b == 30 || a + b == 30) {
//         return true;
//         console.log('Es 30')
//     }
//     else {
//         return false;
//         console.log('ERROR')
//     }
// }

// console.log(resultat(a, b));


//Exercici 10
// var a, b;
// a = 20;
// b = 5;

// var comparatiu = (a, b) => { return (a === b) }

// console.log(comparatiu(a,b));

//Exercici 11

// var a = 25;

// var arrelQuadrada = a => { return Math.sqrt(a) };

// console.log(arrelQuadrada(a));

//Exercici 12

// var paraula = 'Aixo es un test del exercici 12 de Funcions de Javascript!'

// var lletresMinuscules = paraula => { return paraula.toLowerCase() }

// console.log(lletresMinuscules(paraula))


//Exercici 13

// var a = null;
// var b = 50;

// var noNull = (a, b) => { return (a || b) }

// console.log(noNull(a,b))

//Exercici 14

// var frase = 'Funcio per retornar lastPosition';
// var paraula = 'retornar';

// var posicio = (frase, paraula) => { return frase.lastIndexOf(paraula) }
// var dividir = (frase, paraula) => { return frase.split(" ").slice(-1)}

// console.log(posicio(frase, paraula))
// console.log(dividir(frase, paraula))


//Exercici 15
// var x = 5
// var p = 2
// var n = 4
// var r = 5
// var t = 7

// var test1 = x => { return x + x + x }
// var test2 = (p ,n ,r ,t) => { return (p*Math.pow(1+(r/n),n * t))} 

// console.log(test1(x))
// console.log(test2(p, n, r, t))