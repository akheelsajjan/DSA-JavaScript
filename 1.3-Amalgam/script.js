//2 arrays -> check 2nd array is amalgam of 1st array

function same(arr1, arr2){
    if(arr2.length !== arr1.length){
        return 'Length not equal'   
    }
    let counter = {}
    
    for(let i = 0; i< arr1.length; i++){
       let letter = arr1[i]
        if(counter[letter]){
            counter[letter]+= 1
        }else{
            counter[letter] = 1
        }
    }

    for(let i=0; i< arr2.length; i++){
        let letter = arr2[i]
        if(!counter[letter]){
            return false
        }else{
            counter[letter] -=1
        }
    }
    return true
  
}

// let arr1 = [1,2,3,2]
// let arr2 = [4,9,1,4]

let arr1 = 'aaz'
let arr2 = 'zaa'

console.log(same(arr1, arr2))