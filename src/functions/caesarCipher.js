function caesarCipher(string, factor) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p", "q","r", "s","t","u","v","w","x","y","z"];
  const arr = string.toLowerCase().split("");
  let resp = [];

  for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < alphabet.length; j++) {
      if(arr[i] === alphabet[j]){
        if( (j + factor ) > 25 ){
          resp.push(alphabet[(j + factor)-26])
        }else{
          resp.push(alphabet[j + factor])
        }
      }
      
    }
    
  }

  return resp.join("");
}

console.log(caesarCipher("xyz",3))


module.exports = caesarCipher;