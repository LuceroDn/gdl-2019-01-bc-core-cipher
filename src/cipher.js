window.cipher = {
  encode: (offset, string) => {
    let output = "";
   
    for (let i = 0; i < string.length; i++) {
     if (string[i] === " "){
       output += " ";
     } else { 
      let result = string[i];
      let code = string.charCodeAt(i);
        result = String.fromCharCode((code - 65 + offset) % 26 + 65);
   
      output += result;
     }
    }
    return output;
   },

   decode: (offset, string) => {
    let output = "";
   
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " "){
        output += " ";
      } else {
      let result = string[i];
      let code = string.charCodeAt(i);
        result = String.fromCharCode((code + 65 - offset) % 26 + 65);
   
      output += result;
     }
    }
   
    return output;
   }
  
  };
