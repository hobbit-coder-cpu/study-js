/**************************************
  2장. 문자 하나 찾기
**************************************/



// 문자 그대로 찾기 .
const text = `
Hello, my name is Benish. Please visit
my website at http://www.forta.com/.
`
console.log("1.", text.match(/Ben/i)) // 대소문자 미구분(i 옵션)

console.log("2.", text.match(/my/gi)) // 대소문자 미구분, 모두 찾기.(i, g 옵션)

// 모든 문자 찾기 
const text2 = `
sales.xls
sales1.xls
orders3.xls
sales2.xls
sales3.xls
apac1.xls
europe2.xls
na1.xls
na2.xls
sa1.xls
`
console.log("3.", text2.match(/.a./g))  // 메타문자(.)으로 아무 문자 1개와 일치.

// 특수문자 찾기
console.log("4.", text2.match(/.a.\.xls/g)) // 메타문자(.)가 아닌 .을 찾음.







