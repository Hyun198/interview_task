function makingStrings(count = 1000, length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    /* if (length > characters.length) {
        throw new Error('Length exceeds the number of available unique characters.');  
    } */


    const uniqueStrings = new Set();  //생성될 문자열을 저장할 set 초기화

    while (uniqueStrings.size < count) {   //1000개 
        const usedCharacters = new Set(); //각 문자열에 상용할 문자를 저장할 set초기화 (중복을 대비)

        while (usedCharacters.size < length) {  //정해진 문자열 길이 만큼만 
            const randomIndex = Math.floor(Math.random() * characters.length);
            usedCharacters.add(characters[randomIndex]);
        }

        const newString = Array.from(usedCharacters).join(''); //문자들을 합쳐서 새로운 문자열 생성
        uniqueStrings.add(newString); //새로운 문자열을 set에 구조에 저장 (중복을 대비)
    }

    return Array.from(uniqueStrings);
}


let example = makingStrings();

s = 'OPQRSTUV'
let count = 4;



function solution(baseString, count, data) {
    const baseSet = new Set(baseString);  //baseSet 초기화 (중복대비)
    return data.filter(item => {
        // 데이터 문자열이 8자리 알파벳으로 중복 없이 구성되었는지 확인
        if (item.length !== 8 || new Set(item).size !== 8) {
            return false;
        }

        // 데이터 문자열에서 baseString의 문자와 일치하는 문자 수를 셈
        const itemSet = new Set(item); //item문자열을 다시 문자로 나눠 set에 저장
        const commonCount = [...baseSet].filter(char => itemSet.has(char)).length; //주어진 문자열의 문자가 data안에 있는 문자열에 있는지 확인하고 있으면 해당 문자열을 반환


        // 반환한 문자열의 길이가 주어진 문자열의 길이와 같은지 확인하고 같으면 반환
        return commonCount === count;
    });
}

console.log(solution(s, count, example))