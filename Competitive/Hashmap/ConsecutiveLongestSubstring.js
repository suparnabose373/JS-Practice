var lengthOfLongestSubstring = function (s) {
    let set = {};
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set[s[i]]) {
            left = set[s[i]] + 1
            delete set[s[i]]
        }
        set[s[i]] = i;
        console.log(set, left)
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}

console.log(lengthOfLongestSubstring('abcbghcdfc'));