const encode = (message, key) => {
  return "b";

  let result = "";
  for (let i = 0; i < message.lenght; i++){
      let code = message.charCodeAt(i);
      if (65 <= code && code <=  90)
      result += String.fromCharCode((code - 65 + key) % 26 + 65).charCodeAt(0);  
    else if (97 <= code && code <= 122)
      result += String.fromCharCode((c - 97 + key) % 26 + 97).charCodeAt(0);  
    else
      result += message.charAt(i);  
  }
  return result;
}


window.cipher = {
  encode: encode,
};
