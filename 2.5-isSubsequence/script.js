function isSubsequence(str1, str2) {
  let i = 0
  let j = 0

  while(j < str2.length){
      if(str2[j] === str1[i]){
          i++
      }else if(i === str1.length){
          return true
      }
      j++
  }
  return false

}


let str1 ='hello'
let str2 = 'hello world'

console.log(isSubsequence(str1, str2))