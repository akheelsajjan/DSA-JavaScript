function findLongestSubstring(str){
    let i = 0
    let seen = {}
    let longest = 0
    let start = 0

    for(let i = 0; i<str.length; i++){
        let char = str.charAt(i)
        if(seen[char]){
            start =  Math.max(start, seen[char])
        }

        longest = Math.max(longest, i+1 - start)
        seen[char] = i+  1
    }

    return longest
}

let str = 'aabcdeaaduvwzyz'
console.log(findLongestSubstring(str))