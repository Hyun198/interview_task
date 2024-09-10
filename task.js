const solution = (n) => {
    let result = "1";

    for (let i = 1; i < n; i++) {
        let newResult = "";
        let charCounts = {};


        for (let char of result) {
            if (charCounts[char]) {
                charCounts[char]++;
            } else {
                charCounts[char] = 1;
            }
        }
        console.log("charCounts: ", charCounts);
        for (let char of Object.keys(charCounts).sort()) {
            newResult += char + charCounts[char];
        }
        result = newResult;
    }
    return result;
}

console.log(solution(6));