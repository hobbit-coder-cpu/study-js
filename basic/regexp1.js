// 정규 표현식(RegExp, Regular Expression)
// 문자 검색(Search)
// 문자 대체(Replace)
// 문자 추출(Extract)


// 1. 생성자 방식
// new RegExp('표현', '옵션')
// new RegExp('[a-z]', 'gi')

// 2. 리터널 방식
// /표현/옵션
// /[a-z]/gi

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

// 생성자 방식
//const regexp = new RegExp('the', 'gi') // 옵션 g, i 
//console.log(str.match(regexp))

// 리터럴 방식 #1
// const regexp = /the/gi
// console.log(str.match(regexp))

// 리터럴 방식 #2
console.log(str.match(/the/gi))
