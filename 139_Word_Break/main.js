// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

//Solution
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < s.length; i++) {
        if (!dp[i]) continue;

        // Try every word
        for(let x=0;x<wordDict.length;x++){
            let word = wordDict[x];
            if(s.startsWith(word, i)){
                dp[i + word.length] = true;
            }
        }
    }
    return dp[s.length];
};