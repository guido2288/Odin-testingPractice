function reverseString(string) {
  
  let arr = string.split("")
  let resp = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    
    resp.push(arr[i])
  }

  return resp.join("");
}


console.log(reverseString('Hello Word!'));

module.exports = reverseString;