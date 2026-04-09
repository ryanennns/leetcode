function wordBreak(s: string, wordDict: string[]): boolean {
    const memo = new Map<string, boolean>();
    wordDict = [... new Set<string>(...wordDict)];

    let success = false;
    const recurse = (subString: string): boolean => {
        if (subString === "") {
            return true;
        }

        if (memo.has(subString)) {
            return memo.get(subString) || false;
        }

        if (success) {
            return true;
        }

        for (const word of wordDict) {
            if (subString.startsWith(word)) {
                const slice = subString.slice(word.length, subString.length)
                if (recurse(slice)) {
                    memo.set(slice, true);
                }
            }
        }

        memo.set(subString, false);
        return false;
    }

    recurse(s);

    return success;
}

// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
// console.log(wordBreak("leetcode", ["leet","code"]))
console.log(wordBreak("bb", ["a","b","bbb","bbbb"]))
// console.log(wordBreak("applepenapple", ["apple","pen"]))