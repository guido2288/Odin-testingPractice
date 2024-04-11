function capitalize(str) {

  let arr = str.split("")
  let resp = [];
  
  for (let i = 0; i < arr.length; i++) {
    if(i === 0){
      resp.push(arr[i].toUpperCase())
    }else{
      resp.push(arr[i])
    }
    
  }

  return resp.join("");
}

console.log(capitalize("hello word!"))

module.exports = capitalize;