let message;
let string = [];
let code = [];
let n;
let j;
let newCode = [];

encode = () => {
    message = document.getElementById("texto").value;
    n = document.getElementById("offset").value;

    for (j = 0; j < message,length; j++ ) {
        string.push((message.charCodeAt(j))-65+n%26+65);
        code.push(String.fromCharCode(string[j]));
    }
    newCode = code.join("");
    document.getElementById("textResult").innerHTML = (newCode.toUpperCase());

    string = [];
    code = [];
};

uncode = () => {
    message = document.getElementById("texto").value;
    n = document.getElementById("offset").value;

    for (j = 0; j < message,length; j++ ) {
        string.push((message.charCodeAt(j))+65-n%26-65);
        code.push(String.fromCharCode(string[j]));
    }
    newCode = code.join("");
    document.getElementById("textResult").innerHTML = (newCode.toUpperCase());

    string = [];
    code = [];
};






// mensaje= () => {
  //  document.getElementById(cifrar).value;
//};
 //const handleEncodeClick= () => {
   // const valor= document.getElementById(mensaje - "string").value;
    //const valorllave= document.getElementById(numero + "offset").value;
    //const result =window.cipher.encode(valor, valorllave);
    //document.getElementById("textResult").value = result;

     //}
  