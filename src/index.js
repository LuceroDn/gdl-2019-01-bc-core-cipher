//Boton "codificar"
 const encodeButton= () =>{
    const string= document.getElementById("texto").value;
    const offset= parseInt(document.getElementById("key").value);
    let resultado =window.cipher.encode(offset, string);
    document.getElementById("textResult").value = resultado;
};

const cifrar = document.getElementById("encodeButton");
cifrar.addEventListener("click", encodeButton );

//Boton "decodificar"
const uncodeButton= () =>{
    const string= document.getElementById("texto").value;
    const offset= parseInt(document.getElementById("key").value);
    let resultado =window.cipher.decode(offset, string);
    document.getElementById("textResult").value = resultado;
};

const descifrar = document.getElementById("uncodeButton");
descifrar.addEventListener("click", uncodeButton );

//Boton "reiniciar"
const funcion_reiniciar= () => {
    document.getElementById("borrar").reset();
    document.getElementById("limpiarLlave").reset();
    document.getElementById("limpiarResultado").reset();
    };

    const clean = document.getElementById("limpiar");
    clean.addEventListener("click", funcion_reiniciar);

//Convertidor de minusculas a mayusculas dentro de la caja de texto
    function mayus(e) {
        e.value = e.value.toUpperCase();
    }

    const mayusculas = document.getElementById("texto");
    mayusculas.addEventListener("click", mayus(e));
