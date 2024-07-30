document.getElementById("Ingresar-texto").addEventListener("change", function(){
    var texto_entrada = document.getElementById("Ingresar-texto").value;
    modificar_parametros(texto_entrada); // Llamada a la función con el valor del input
});

document.getElementById("encriptar").addEventListener("click",function(){
    var texto_entrada = document.getElementById("Ingresar-texto").value;
    var texto_encriptado = encriptar_string(texto_entrada);
    document.getElementById("imagen").style.display = "none";
    document.getElementById("exteriozar-texto-principal").style.display = "none";
    document.getElementById("exteriozar-texto-secundario").style.display = "none";
    document.getElementById("encriptar-desencriptar").disabled = false;
    document.getElementById("encriptar-desencriptar").value = texto_encriptado;
    ajustarAltura(textarea2); // Ajustar la altura del textarea de salida
    ajustarAltura(textarea1); 

});

document.getElementById("desencriptar").addEventListener("click",function(){
    var texto_entrada = document.getElementById("Ingresar-texto").value;
    var texto_desencriptado = desencriptar_string(texto_entrada);
    document.getElementById("imagen").style.display = "none";
    document.getElementById("exteriozar-texto-principal").style.display = "none";
    document.getElementById("exteriozar-texto-secundario").style.display = "none";
    document.getElementById("encriptar-desencriptar").disabled = false;
    document.getElementById("encriptar-desencriptar").value = texto_desencriptado;
    ajustarAltura(textarea2); 
    ajustarAltura(textarea1); 

});
const textarea1 = document.getElementById('Ingresar-texto');
const textarea2 = document.getElementById('encriptar-desencriptar');

// Función para ajustar la altura
function ajustarAltura(textarea) {
    textarea.style.height = 'auto'; // Restablecer la altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar la altura al scrollHeight
}

// Ajustar la altura inicialmente
ajustarAltura(textarea1);
ajustarAltura(textarea2);

// Evento para ajustar la altura en cada entrada
textarea1.addEventListener('input', function() {
    ajustarAltura(this);
});

// Función para modificar los parámetros a minúsculas
function modificar_parametros(texto_entrada) {
    let texto_entrada_modificado_sin_tildes = eliminar_tildes(texto_entrada);
    let texto_entrada_modificado = texto_entrada_modificado_sin_tildes.toLowerCase(); // Convertir a minúsculas
    return texto_entrada_modificado;
}

function eliminar_tildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encriptar_string(texto) {
    let texto_modificado = modificar_parametros(texto);
    texto_modificado = texto_modificado.replace(/[aeiou]/g, function(match) {
        switch (match) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });
    console.log(texto_modificado);
    return texto_modificado;
}

function desencriptar_string(texto) {
    let texto_modificado = modificar_parametros(texto);
    texto_modificado = texto_modificado.replace(/ai|enter|imes|ober|ufat/g, function(match) {
        switch (match) {
            case 'ai': return 'a';
            case 'enter': return 'e';
            case 'imes': return 'i';
            case 'ober': return 'o';
            case 'ufat': return 'u';
        }
    });
    console.log(texto_modificado);
    return texto_modificado;
}
