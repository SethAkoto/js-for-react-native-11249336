function processArray(array){
    
    let newArr = [];

       for(let i = 0 ; i <= array.length ; i++ ){
           let num = array[i];
        if(num % 2 === 0 ){
            newArr.push(num **2)
        }
        else{
            newArr.push(num * 3)
        }
               }
      return newArr;
}


export function formatArrayStrings(strArr, numArr) {
  const formattedArray = [];

  for (let i = 0; i < strArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      formattedArray.push(strArr[i].toUpperCase());
    } else {
      formattedArray.push(strArr[i].toLowerCase());
    }
  }

  return formattedArray;
}


  