//Max sub array : ([1,2,3,4,5,6,7,8,9],3) --> 7 + 8 + 9

function maxSubArray(arr, num){
    let maxSum = 0;
    let tempSum = 0
    if(arr.length < num) return null
    for(let i = 0; i< num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum,tempSum)
    }
    return maxSum
}

let arr = [1,2,3,4,5,6,7,8,9]

console.log(maxSubArray(arr,3))