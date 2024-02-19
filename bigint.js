// BigInt
// 숫자 데이터가 안정적으로 표시할 수 있는 
// 최대치 (2^53 - 1) 보다 큰 정수를 표현할 수 있다.
// 전수 뒤에 n을 붙이거나 BigInt()를 호출해 생성



console.log(1234567890123456789012345678901234567890)
console.log(1234567890123456789012345678901234567890n)
console.log(BigInt('1234567890123456789012345678901234567890'))

const a = 11n
const b = 22

console.log(a + BigInt(b))
console.log(typeof (a + BigInt(b)))

console.log(Number(a) + b)
console.log(typeof (Number(a) + b))

