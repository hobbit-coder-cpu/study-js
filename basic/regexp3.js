// 정규 표현식(RegExp, Regular Expression)

// 옵션
// g - 모든 문자 일치(Global), 일치하는 모든 문자 찾기. 예) 문자열 내 모든 my 찾기.
// i - 영어 대소문자를 구분 않고 일치(Ignore case)
// m - 여러 줄 일치(Multi line), 각각의 줄을 시작과 끝으로 인식!

const str = `
010-1234-5678
thesecon@gmail.com
Hello world!
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hello@naver.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbcccddddeeeee
`

console.log(str.match(/the/))
console.log(str.match(/the/g))
console.log(str.match(/the/gi))
console.log(str.match(/\./gi))    // 문자로서의 . 으로 사용하기 위해 \(백슬래쉬) + . 
console.log(str.match(/\.$/gi))   // $ 문자열의 가장 마지막 끝을 의미
console.log(str.match(/\.$/gim))  // $ + 옵션m : 각 줄마다의 끝을 의미