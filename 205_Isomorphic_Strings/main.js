// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

//Solution
var isIsomorphic = function(s, t) {
    let sToT = new Map();
    let tToS = new Map();

    for (let i = 0; i < s.length; i++) {
        if (sToT.has(s[i])) {
            if (sToT.get(s[i]) !== t[i]) return false;
        } else {
            sToT.set(s[i], t[i]);
        }

        if (tToS.has(t[i])) {
            if (tToS.get(t[i]) !== s[i]) return false;
        } else {
            tToS.set(t[i], s[i]);
        }
    }

    return true;
};