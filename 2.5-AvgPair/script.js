//Avg pair: check if there are pairs for target value
// ([1,2,3],2.5) => 1,2

function avgPair(arr, avg){
    let left = 0
    let right = arr.length - 1
    
    while(left != right){
        let avgValue = (arr[left] + arr[right])/2
        if( avgValue === avg ){
            return [arr[left], arr[right]]
        }else if (avgValue > avg){
            right--
        }else{
            left++
        }
    }
    return 'No values'
}

let arr = [1,2,3,4]
let avg = 3.5

console.log(avgPair(arr,avg))