//Count Unique values for sorted arrY

function countUnique(arr){
    if(arr.length == 0){
        return 0
    }else{
        var i = 0
        for(var j=1; j< arr.length; j++){
            if(arr[i] !== arr[j]){
                i++
                arr[i] = arr[j]
            }
        }
        return i + 1
    }
    
}

let arr = [1,2,3,4] ///1,2,3,4

arr = arr.sort()
console.log(countUnique(arr))