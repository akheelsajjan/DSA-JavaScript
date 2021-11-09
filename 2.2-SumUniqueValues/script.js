//Count Unique values

function countUnique(arr){
    let map = new Map()
    let sum = 0;

    arr.forEach(element => {
        if(map.get(element)){
            map.set( element ,map.get(element) + 1)
        }else{
            map.set(element, 1)
          //  sum += element
        }
    });
   
    for(let [key, value] of map){ 
        if(value == 1){
            sum += key
        }
    }
    
    if(sum > 0){
        return sum
    }else{
        return 'No Unique Values'
    }
}

let arr = [1,2,1,1,1,1,3,1,1,2,1,4] // 3 + 4 = 7
//let arr = [1,1];
console.log(countUnique(arr))