function generateLookAndSaySequence(n) {
    let result = '1';  // 초기값은 '1'

    for (let step = 1; step < n; step++) {
        let newResult = '';
        let charCounts = new Map();

        // 문자열 안에 각 문자의 개수를 세기
        for (let char of result) {
            charCounts.set(char, (charCounts.get(char) || 0) + 1);
        }

        // 결과 문자열에 개수와 문자를 추가 (개수 + 문자)
        let sorted = Array.from(charCounts.keys()).sort();

        for (let char of sorted) {
            newResult += char + charCounts.get(char);
        }

        result = newResult;
    }

    return result;
}

console.log(generateLookAndSaySequence(6));  // 출력: '122131'
