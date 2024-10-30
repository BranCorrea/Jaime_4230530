var a, b, ope;

function init(){
    var resultado = document.getElementById('resultado');
    var reset  = document.getElementById('reset');
    var suma  = document.getElementById('suma');
    var resta  = document.getElementById('resta');
    var multiplicacion  = document.getElementById('multi');
    var division  = document.getElementById('divi');
    var igual  = document.getElementById('igual');
    var uno  = document.getElementById('uno');
    var dos  = document.getElementById('dos');
    var tres  = document.getElementById('tres');
    var cuatro  = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho  = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero  = document.getElementById('cero');

    uno.onclick = function(){
        resultado.textContent = resultado.textContent + 1;
    }
    dos.onclick = function(){
        resultado.textContent = resultado.textContent + 2;
    }
    tres.onclick = function(){
        resultado.textContent = resultado.textContent + 3;
    }
    cuatro.onclick = function(){
        resultado.textContent = resultado.textContent + 4;
    }
    cinco.onclick = function(){
        resultado.textContent = resultado.textContent + 5;
    }
    seis.onclick = function(){
        resultado.textContent = resultado.textContent + 6;
    }
    siete.onclick = function(){
        resultado.textContent = resultado.textContent + 7;
    }
    ocho.onclick = function(){
        resultado.textContent = resultado.textContent + 8;
    }
    nueve.onclick = function(){
        resultado.textContent = resultado.textContent + 9;
    }
    cero.onclick = function(){
        resultado.textContent = resultado.textContent + 0;
    }

    reset.onclick = function(e){
        resetear()
    }

    suma.onclick = function(e){
        a = resultado.textContent;
        ope = "+";
        limpiar()
    }

    resta.onclick = function(e){
        a = resultado.textContent;
        ope = "-";
        limpiar()
    }

    multiplicacion.onclick = function(e){
        a = resultado.textContent;
        ope = "*";
        limpiar()
    }

    division.onclick = function(e){
        a = resultado.textContent;
        ope = "/";
        limpiar()
    }
    
    igual.onclick = function(e){
       b = resultado.textContent;
       resolver();
    }



}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent="";
    a=0;
    b=0;
    ope="";
}


    function resolver(){
        var res = 0;
        switch(ope){
            case "+":
                res = parseFloat(a) +  parseFloat(b);
                break;
            case "-":
                res = parseFloat(a) - parseFloat(b);
                break;
            case "*":
                res = parseFloat(a) *  parseFloat(b);
                break;
            case "/":  
                res = parseFloat(a) / parseFloat(b);
                break;
        }
        resultado.textContent = res; // Mostramos el resultado
    }
    
init();