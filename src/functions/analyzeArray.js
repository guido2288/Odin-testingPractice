function analyzeArray(array) {

   const average = array.reduce( (total, num) => {
      return total + num;
    }, 0 ) / array.length;

   const min = array.reduce( (min, num) => {
      if(min === 0 ){
        min = num;
      }else if(min > num){
        min = num
      }
      return min
    },0 );

    const max = array.reduce( (min, num) => {
      if(min === 0 ){
        min = num;
      }else if(min < num){
        min = num
      }
      return min
    },0 );

    const length = array.length;


  return {average , min , max, length};

}

console.log(analyzeArray([1,8,3,4,2,6]))

module.exports = analyzeArray;