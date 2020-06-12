const calculadora = () => {
    // elementos del dom
    var display = document.getElementById('display');
    var cero = document.getElementById('0');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplica = document.getElementById('por');
    var divide = document.getElementById('divide');
    var raiz = document.getElementById('raiz');
    var porcentaje = document.getElementById('porcentaje');
    var resultado = document.getElementById('igual');
    var potencia = document.getElementById('potencia');
    var borrar = document.getElementById('borrado');
    var pi = document.getElementById('pi');
    var punto = document.getElementById('punto');
    // fin elementos del dom

    // operaciones
    var operacion;
    var valor1 = 0;
    var valor2 = 0;
    var resultado;
    // fin operaciones

    // funciones de teclas

    //Funciones de Numeros//
    cero.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 0;
        }else{
            display.value +=0;
        }
    })
    uno.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 1;
        }
        else{
            display.value += 1;
        }
    })
    dos.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 2;
        }else{
            display.value += 2;
        }
    })
    tres.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 3;
        }else{
            display.value += 3;
        }
    })
    cuatro.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 4;
        }else{
            display.value += 4;
        }
    })
    cinco.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 5;
        }else{
            display.value += 5;
        }
    })
    seis.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 6;
        }else{
            display.value += 6;
        }
    })
    siete.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 7;
        }else{
            display.value += 7;
        }
    })
    ocho.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 8;
        }else{
            display.value += 8;
        }
    })
    nueve.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 9;
        }else{
            display.value += 9;
        }
    })
    //Fin Funciones de Numeros//

    //Punto
    punto.addEventListener('click', () => {
        if(borrarCeros()){
            display.value = 0;
        }else{
            display.value += '.';
        }
    })
    //Fin Punto

    //Suma
    suma.addEventListener('click', () => {
        operacion = '+';
        valor1 = display.value;
        borrado();
    })
    //Fin Suma

    //Resta
    resta.addEventListener('click', () => {
        operacion = '-';
        valor1 = display.value;
        borrado();
    })
    //Fin resta

    //Multiplicacion
    multiplica.addEventListener('click', () => {
        operacion = '*';
        valor1 = display.value;
        if(valor1 !=0){
            display.value = 0;
        }
        borrado();
    })
    //Fin Multiplicacion

    //Division
    divide.addEventListener('click', () => {
        operacion = '/';
        valor1 = display.value;
        borrado();
    })
    //Fin Division

    //Borrr
    borrar.addEventListener('click', () => {
        display.value = 0;
        operacion = null;
    })
    //Fin Borrar

    //Resultado
    resultado.addEventListener('click', () => {
        valor2 = display.value;
        display.value = resultado;
        realizarOp();
    })
    //Fin Resultado

    //Porcentajes
    porcentaje.addEventListener('click', ()=>{
        
    })
    //Fin Porcentajes

    // Raiz
    raiz.addEventListener('click', ()=>{
        valor1 = display.value;
        display.value = Math.sqrt(valor1);
    })
    //Fin Raiz

    // Potencia
    potencia.addEventListener('click', ()=>{
        operacion = '**';
        valor1 = display.value;
        borrado();
    })
    //Fin Potencia

    // PI
    pi.addEventListener('click', ()=>{
        operacion = 'π';
        valor1 = display.value;
        borrado();
        display.value = Math.PI;
    })
    //Fin PI

    //Fin Funciones de Teclas//

    function borrado(){
        return display.value = 0;
    }

    function borrarCeros() {
        if (display.value == 0) {
            display.value = 0;
            return true;
        }
        if(display.value != 0){
            return false;
        }
    }
    // operaciones matematicas

    function realizarOp() {
        resultado = 0;
        switch (operacion) {
            case '+':
                resultado = parseFloat(valor1) + parseFloat(valor2);
                break;
            case '-':
                resultado = parseFloat(valor1) - parseFloat(valor2);
                break;
            case '*':
                resultado = parseFloat(valor1) * parseFloat(valor2);
                break;
            case '/':
                resultado = parseFloat(valor1) / parseFloat(valor2);
                break;
            case '**':
                resultado = parseFloat(valor1) ** parseFloat(valor2);
                break;
            // case 'π':
            //     resultado = parseFloat(valor1) 
            default:
                // alert('no pasa nada')
                break;
        }
    borrado();
    display.value = resultado;
    return resultado;
    }
    // fin de operaciones matematicas
}

calculadora();
