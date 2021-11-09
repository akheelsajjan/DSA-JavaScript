//2 arrays -> check 2nd array is squared of 1st array

function same(arr1, arr2){
    if(arr2.length !== arr1.length){
        return 'Length not equal'   
    }
    let map1 = new Map()
    let map2 = new Map()

    arr1.forEach(element => {
        if(map1.get(element)){
            map1.set(element, map1.get(element) + 1)
        }else{
            map1.set(element, 1)
        }
    });

    arr2.forEach(element=>{
        if(map2.get(element)){
            map2.set(element, map2.get(element) + 1)
        }else{
            map2.set(element, 1)
        }
    })

    for(let key of map1.keys()){
      if(!(map2.get(key**2))){
        return false
      }
      if(map2.get(key**2) !== map1.get(key)){
        return false
      }
    }
    return true
  
}

let arr1 = [1,2,3,2]
let arr2 = [4,9,1,4]

console.log(same(arr1, arr2))