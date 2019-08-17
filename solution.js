var uniqueInOrder=function(iterable){
let arrToTest = []

 if(typeof iterable === "string") {
  arrToTest = iterable.split('')
 }
 else {
   arrToTest = iterable
 }
 
  let answerArr = arrToTest.filter((val, i, arr)=>{
     return val !== arr[i-1]
  })

  return answerArr
}
