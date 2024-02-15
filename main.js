// Map
// 객체와 유사하지만
// 객체는 키로 문자열 또는 심볼값만 가능하지만 
// Map은 객체를 포함한 모든 값 가능

const map = new Map()

// 키와 값의 쌍으로 이루어진 이터러블을 인자로
const map1 = new Map([['k1', 'v1'], ['k2', 'v2']])
console.log(map1)

const map2 = new Map([['k1', 'v1'], ['k2', 'v2'], ['k1', 'k3']])
const {size} = map2
console.log(map2)
console.log(size)

// set
const map3 = new Map()
map3
    .set('key1', 'value1')
    .set(1, 100)            // method chaining
console.log(map3)

// 
const map4 = new Map()
const o1 = {name: 'minjungwon'}
const o2 = {name: 'minjungwon'}
const o3 = o1;
o3.name = 'min'

map4   
    .set(o1, 'v1')
    .set(o2, 'v2')
    .set(o3, 'v3') // 키 중복, 갱신

console.log(map4)

// get
console.log(map4.get(o1))

// has
const o4 = {}
console.log(map4.has(o4))

// delete
const lee = {name: 'lee'}
const kim = {name: 'kim'}

const map5 = new Map([[lee, 'v1'], [kim, 'v2']])
console.log(map5)

lee.name = 'LEE'
console.log(map5)

