const solution = (n) => {
    let result = "1";
    for (let i = 0; i < n; i++) {
        let newResult = "";
        let charMap = new Map();

        for (let char of result) {
            charMap.set(char, (charMap.get(char) || 0) + 1)

        }

        let sortedChars = Array.from(charMap.keys()).sort();
        for (let char of sortedChars) {
            newResult += char + charMap.get(char);
        }
        result = newResult;
    }
    return result;

}

console.log(solution(6))