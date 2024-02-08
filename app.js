let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya sorteamos todos los números
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }
    else
    {
        //Sí el número generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) 
        {
            //Recursividad de la misma función
            return generarNumeroSecreto();
        }
        else
        {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números 
    // Generar el número aleatorio
    // Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');   
}

condicionesIniciales();

//Ejercicios

let listaGenerica = [1, 2, 3, 4, 5];

let lenguajesDeProgramacion = ['JavaScript', 'C', 'Kotlin', 'Python'];
//Antes de agregar, elementos
console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//Agregando lenguajes nuevos
console.log(lenguajesDeProgramacion);
console.log(listaGenerica);

function mostrarListaDeLenguajes() 
{
    for (let index = 0; index < lenguajesDeProgramacion.length; index++) 
    {
        console.log(lenguajesDeProgramacion[index]);
    }    
}
mostrarListaDeLenguajes();

function mostrarLenguajesReversa() 
{
    for (let index = lenguajesDeProgramacion -1; index >= 0; index--)
    {
        console.log(lenguajesDeProgramacion[index]);
    }
}

mostrarLenguajesReversa();

function calculaPromedioNumeros(lista)
{
    let suma = 0;
    for(let i = 0; i < lista.length; i++)
    {
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [10,20,30,40,50];
let promedio = calculaPromedioNumeros(numeros);
console.log(`EL promedio de la lista de números: ${numeros} es: ${promedio}`);

function encontrarMayorMenor(lista) 
{
    let mayor = lista[0];
    let menor = lista[0];
    
    for(i=0; i < lista.length; i++)
    {
        if (lista[i] > mayor) 
        {
            mayor = lista[i];
        }
        else if(lista[i] < menor)
        {
            menor = lista[i];
        }
    }
    console.log('Mayor', mayor);
    console.log('Menor', menor);
}

let numerosMayoresMenos = [4,16,9,25,36,8];
console.log(`Numeros sin ordenar ${numerosMayoresMenos}`);

encontrarMayorMenor(numerosMayoresMenos);

function calcularSuma(lista)
{
    let suma = 0;
    for(let i = 0; i < lista.length; i++)
    {
        suma += lista[i];
    }
    return suma;
}

let sumaNumeros = [10,20,30,40,50];
let suma = calcularSuma(sumaNumeros);
console.log(`La suma de los números: ${sumaNumeros} es ${suma}`);

function sumaListas(lista1, lista2) 
{   //Verificar que las listas tengan la misma longitud
    if (lista1.length !== lista2.length) 
    {
        console.log('Las listas deben tener la misma longitud')
        return;
    }

    let resultadoSumaListas = [];
    
    //Iterar sobre las listas y sumar elementos
    for(let i = 0; i < lista1.length; i++)
    {
        resultadoSumaListas.push(lista1[i] + lista2[i]);
    }

    return resultadoSumaListas;
}