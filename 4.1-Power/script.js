function productArray(num){
    if(num == 0) return 0
    if(num == 1) return 1
    return num + productArray(num-1)
}

console.log(productArray(3))