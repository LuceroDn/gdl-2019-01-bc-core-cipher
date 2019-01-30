const mensaje= () => {
    document.getElementById(cifrar).value;
}
 const handleEncodeClick= () => {
    const valor= document.getElementById("message").value;
    const valorllave= document.getElementById("key").value;
    const result = window.cipher.encode(valor, valorllave);
    document.getElementById("resultadoEncriptar").value = result;
    //llave();
 }
 
const llave = ()  => {
    const valorllave= document.getElementById("key").value;
    console.log("numero" + valorllave)
 }
