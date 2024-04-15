// 정규 표현식으로 해결하는 일반적인 문제들

// 정규 표현식과 한글과 유니코드
const text = `
안녕하세요? 나부군입니다.
`

console.log("1", text.match('나부군'))

const text2 =`
국어 : 수
영어 : 수
수학 : 수
미술 : 양
체육 : 가
`

console.log(text2.match(/[^가-힣]+(수|우|미|양|가)[^가-힣]+/g)) // [가-힣] : 모든 한글 일치.

// 유니코드 일치시키기
const text3 = `
Copyright © 2009 인사이트
`

console.log(text3.match(/\u00a9/g)) // \u : 유니코드 표기
