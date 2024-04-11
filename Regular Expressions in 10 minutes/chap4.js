// 4장 메타 문자 사용하기

const text = `
var myArray = new Array();
if (myArray[0] == 0) {

}
`
console.log("1-1.", text.match(/myArray\[[0-9]\]/g))
console.log("1-2.", text.match(/myArray\[\d\]/g))

const text2 = `
"101", "Ben", "Forta"
"102", "Jim", "James"

"103", "Roberta", "Robertson"
"104", "Bob", "Bobson"
`
console.log("2.", text2.match(/\n\n/g)) // 빈줄 찾기

// 문자 클래스 
// 자주 쓰는 문자 집합들은 특수한 메타 문자로 대신하기도 한다.
// 이런 메타 문자들을 문자 클래스(classes of characters)라 한다.
// \d : 숫자 하나 = [0-9]
// \D : 숫자를 제외한 문자 하나 = [^0-9]
// \w : 대소문자와 밑줄을 포함하는 모든 영숫자 = [a-zA-Z0-9_]
// \W : 영숫자(alphanumeric)나 밑줄이 아닌 모든 문자 = [^a-zA-Z0-9_]

// 포직스 문자 클래스 사용하기
// !! 자바 스크립트에서는 지원하지 않음 !!

