
 const encodeButton= () =>{
    const string= document.getElementById("texto").value;
    const offset= parseInt(document.getElementById("key").value);
    let resultado =window.cipher.encode(string, offset);
    document.getElementById("textResult").value = resultado;

}
const uncodeButton= () =>{
    const string= document.getElementById("texto").value;
    const offset= parseInt(document.getElementById("key").value);
    let resultado =window.cipher.decode(string, offset);
    document.getElementById("textResult").value = resultado;

}