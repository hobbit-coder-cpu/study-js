// 얕은 복사 & 깊은 복사 
// 참조형은 가변성으로 인해, 데이터를 복사할 때 주의 필요


// 얕은 복사(Shallow Copy) - 참조형의 1차원 데이터만 복사
// 깊은 복사(Depp Copy) - 참조형의 모든 차원 데이터를 복사

// import cloneDeep from '/lodash/cloneDeep'

//////////////////////////////////////////////////
const a = {x : 1}
// 얕은 복사
const b = Object.assign({}, a) // 또는 {...a}

b.x = 2

console.log(b)
console.log(a)

///////////////////////////////////////////////
const c = {x: {y: 1}}
//const d = cloneDeep(c)

//d.x.y = 2

//console.log(d)
console.log(c)

///////////////////////////////////////////
const e  = [1, 2, 3]
const f = e.concat([]) // 또는 [...e]

f[0] = 4
console.log(f)
console.log(e)

///////////////////////////////////////
const g = [[1, 2], [3]]
const h = [...g]

h[0][0] = 4
console.log(h)
console.log(g)
