// 3장 문자 집합으로 찾기.

// 여러 문자 중 하나와 일치시키기
//    대괄호([])는 문자 집합을 정의한다.
//    집합에 속한 문자 가운데 하나가 일치한다.
//    집합에 속한 문자가 모두 일치할 필요는 없다.

const text = `
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

console.log("1.", text.match(/[ns]a.\.xls/g)) // 첫문자가 n이거나 s

const text2 = `
The phrase "regular expression" is often
abbreviated as RegEx or regex.
`

console.log("2.", text2.match(/[Rr]eg[eE]x/g))

// 문자 집합 범위 사용하기
// 하이픈(-)은 대괄호안에서만 메타문자!
console.log("3-1.", text.match(/[ns]a[0123456789]/g))
console.log("3-2.", text.match(/[ns]a[0-9]/g))
console.log("3-3.", text.match(/[ns]a\d/g))


// 제외하고 찾기.
// 캐럿(^)과 대괄호([])를 통해 제외할 문자집합을 만든다.

const text3 = `
sales1.xls
orders3.xls
sales2.xls
sales3.xls
apac1.xls
europe2.xls
sam.xls
na1.xls
na2.xls
sa1.xls
ca1.xls
`
console.log("4.", text3.match(/[ns]a[^0-9]\.xls/g)) // 
