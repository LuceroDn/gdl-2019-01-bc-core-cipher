
 const encodeButton= () =>{
    const string= document.getElementById("texto").value;
    const offset= parseInt(document.getElementById("key").value);
    let resultado =window.cipher.encode(offset, string);
    document.getElementById("textResult").value = resultado;
};

const cifrar = document.getElementById("encodeButton");
cifrar.addEventListener("click", encodeButton );

const uncodeButton= () =>{
    const string= document.getElementById("texto").value;
    const offset= parseInt(document.getElementById("key").value);
    let resultado =window.cipher.decode(offset, string);
    document.getElementById("textResult").value = resultado;
};

const descifrar = document.getElementById("uncodeButton");
descifrar.addEventListener("click", uncodeButton );

const funcion_reiniciar= () => {
    document.getElementById("id_formulario").reset();
    document.getElementById("limpiarLlave").reset();
    document.getElementById("limpiarResultado").reset();
    };

    const clean = document.getElementById("limpiar");
    clean.addEventListener("click", funcion_reiniciar);

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }