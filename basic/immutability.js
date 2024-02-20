// 불변성 & 가변성

// 불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않고, 
// 가변성(Mutability)은 생성된 데이터가 메모리에서 변경될 수 있음을 의미

// 자바스크렙트 원시형은 불변성, 참조형은 가변성

/////////////////////////////////
let a = 1
let b = a

b = 2

console.log(a)
console.log(b)

//////////////////////////
let c = { x: 1}
let d = c

d.x = 2
console.log(c)
console.log(d)

c.x = 7
console.log(c)
console.log(d)

/////////////////////////////
let e = {x: 1}
let f = {x: 1}

f.x = 2
console.log(e)
console.log(f)

////////////////////////////////
let g = [1, 2, 3]
let h = g

h[0] = 4
console.log(g)
console.log(h)
