//minSubarraySum([100,200,300,400], 2) -> 100 + 200

function minSubArray(arr, n){
    let minSum = 0
    let tempSum = 0

    for(let i = 0; i< n; i++){
        minSum = minSum + arr[i]
    }
    tempSum = minSum;
    for(let j = n; j < arr.length; j++){
        tempSum = tempSum + arr[j-n] + arr[j]
        minSum = Math.min(minSum, tempSum)
    }
    return minSum
}

let arr = [100,200,300,400]
let n = 2

console.log(minSubArray(arr, n))