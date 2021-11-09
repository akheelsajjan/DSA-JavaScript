// findLongestSubstring('abcdauvwxyz') -> uvwxyz

//Brute Force Approach
// function findLongestSubstring(str){
//     let count = 0;

//     for(let i = 0; i < str.length; i++){
//         let char = str.charAt(i)
//         let set = new Set([char])
//         for(let j=i+1; j < str.length; j++){
//             let char = str.charAt(j)
//             if(set.has(char)){
//                 break
//             }else{
//                 set.add(char)
//             }
//             count = Math.max(count, set.size)
//         }
//     }
//     return count
// }

//Using Set
// function findLongestSubstring(str){
//     let i = 0;
//     let j = 0;
//     let size = str.length
//     let count = 0;
//     let set = new Set()

//     while(i < size && j < size){
//         let char = str.charAt(j)
//         if(!set.has(char)){
//             set.add(char)
//             j++
//             count = Math.max(count, set.size)
//             console.log(set)
//         }else{
//             set.delete(str.charAt(i))
//             i++
//         }
//     }
//     return count
// }

//without inbuilt functions
// function findLongestSubstring(str) {
//     let longest  = 0
//     let seen = {}
//     let start = 0

//     for(let i = 0; i < str.length; i++){
//         let char = str.charAt(i)
//         if(seen[char]){
//             start = Math.max(start , seen[char])
//         }
//         longest = Math.max(longest, i - start + 1)
//         seen[char] = i + 1
//     }
//     return longest
// }




let str = 'abcdabcde'
console.log(findLongestSubstring(str))