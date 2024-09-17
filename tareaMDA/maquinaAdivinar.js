let numeroUsuario = parseInt(prompt("INGRESA TU NUMERO:"));

let numeroMaquina = 1 + Math.floor(Math.random() * 10);

if (numeroUsuario === numeroMaquina){

    alert("EL NUMERO ES IGUAL")
} else if (numeroUsuario != numeroMaquina){

    alert("NUMERO INCORRECTO")
    let numeroUsuario2 = parseInt(prompt("INGRESA UN NUMERO"));
    if (numeroUsuario2 === numeroMaquina){alert("EL NUMERO ES IGUAL")}
    else if (numeroUsuario2 != numeroMaquina){

        alert("EL NUMERO ES INCORRECTO")

        let numeroUsuario3 = parseInt(prompt("INGRESA UN NUMERO"));
        if(numeroUsuario3 === numeroMaquina){
            alert("EL NUMERO  ES IGUAL");
        } else{
            alert("FALLASTE!!!");
        }


    }

}




console.log(numeroMaquina);