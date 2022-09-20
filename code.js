var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar= document.querySelector(".btn-copiar")
var area = document.querySelector(".area")
var muneco = document.querySelector(".muneco");
var texto1 = document.querySelector(".texto1");
var texto2 = document.querySelector(".texto2");
var resultado = document.querySelector(".textresultado");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar (){
    ocultar();
    var area = recuperarTexto()
    resultado.textContent = encriptacion(area);
    
    
}

function desencriptar(){
    ocultar();
    var area = recuperarTexto()
    resultado.textContent = desencriptacion(area);
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultar(){
    muneco.classList.add("ocultar");
    texto1.classList.add("ocultar");
    texto2.classList.add("ocultar");

} 

function encriptacion(mensaje){
    var texto = mensaje;
    var textofinal ="";
    
    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textofinal = textofinal + "ai"
            }  
        else if (texto[i] == "e"){
            textofinal = textofinal + "enter"
            }
         else if (texto[i] == "i"){
            textofinal = textofinal + "imes"
             }
         else if (texto[i] == "o"){
            textofinal = textofinal + "ober"
             }
         else if (texto[i] == "u"){
            textofinal = textofinal + "ufat"
            }

        else{
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}

function desencriptacion(mensaje){
    var texto = mensaje;
    var textofinal ="";
    
    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textofinal = textofinal + "a"
            i = i + 1;
        }  
        else if (texto[i] == "e"){
            textofinal = textofinal + "e"
            i = i+4;
        }
         else if (texto[i] == "i"){
            textofinal = textofinal + "i"
            i =i+3; 
        }
         else if (texto[i] == "o"){
            textofinal = textofinal + "o"
            i =i+3; 
        }
         else if (texto[i] == "u"){
            textofinal = textofinal + "u"
            i =i+3; 
        }

        else{
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}

function traspasar(texto){
    var codigoaCopiar = document.querySelector(".textresultado");
    codigoaCopiar.innerHTML = texto;
}
    

function copiar(){
        var codigoaCopiar = document.querySelector(".textresultado");
        var texarea = document.getElementsByClassName(".area");
        texarea.value =codigoaCopiar.innerHTML;
        navigator.clipboard.writeText(codigoaCopiar.innerHTML);
        
        
}

