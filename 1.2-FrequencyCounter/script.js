//2 arrays -> check 2nd array is squared of 1st array

function same(arr1, arr2){
    if(arr2.length !== arr1.length){
        return 'Length not equal'   
    }
    let flag = true
    let map1 = new Map()

    arr1.forEach(element => {
        element = element ** 2
        if(map1.get(element)){
            map1.set(element, map1.get(element) + 1)
        }else{
            map1.set(element, 1)
        }
    });
    arr2.forEach(element=>{
        if(!(map1.get(element))){
            flag = false
            return false
        }else{
            map1.set(element, map1.get(element) - 1 )
        }
    })

    return flag
  
}

// let arr1 = [1,2,3,2]
// let arr2 = [4,9,1,4]

let arr1 = [1,2,3,2,0,10]
let arr2 = [4,9,1,4,0,100]


console.log(same(arr1, arr2))