// Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each
// word is a valid dictionary word. Return all such possible sentences. For example, given:
// s = "catsanddog", dict = ["cat", "cats", "and", "sand", "dog"], the solution is ["cats and dog", "cat sand dog"].


var wordBreak = function(s, wordDict) {
    
    const dictSet = new Set(wordDict);
    const memo = {};

    function dfs(start) {
        
        if(start > s.length-1) { 
            console.log(start,s.length-1, 'here')
            return [[]];
        }
        
        if(memo[start] !== undefined) {
            return memo[start];
        }
        
        const out = [];
        
        for(let i = start; i < s.length; i++) {
            const substr = s.substring(start, i+1);
            if(dictSet.has(substr)) {
                console.log(substr)
                let next = dfs(i+1); 
                console.log(next);
                for(let n of next) {
                    out.push([substr, ...n]);
                }
            }
        }  
        return memo[start] = out;
        
    }
    
    const res = dfs(0)

    return res.filter(a => a.join('') === s).map(a => a.join(' '));
};

var str, dict;
// str = "iloveamazon"
// dict=["i", "love","amazon"]
str = "catsanddog";
dict = ["cat", "cats", "and", "sand", "dog"];
console.log(wordBreak(str, dict));