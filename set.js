const s = new Set()

// 이터러블을 인수로 받는다. 
const s1 = new Set([1, 2, 3, 4, 1])
console.log(s1) // 1, 2, 3, 4

const s2 = new Set('Hello World')
console.log(s2) // 'H' 'e' 'l' 'l' 'o' ' ' 'w' 'o' 'r' 'l' 'd'

// 
const unique = (array) => {
    return [...new Set(array)]
}

const arr = unique([1, 2, 3, 4, 2, 5, 3, 1])
console.log(arr)

// add
const s3 = new Set()
s3.add(1).add('h').add('Wow') // method chaining
console.log(s3)

// delete
console.log(`s3.delete('Wow'):`, s3.delete('Wow'))
console.log(`s3.delete(2000)`, s3.delete(2000))

// has
console.log(`s3.has(3)`, s3.has(3))
console.log(`s3.has('h')`, s3.has('h'))


// clear
console.log(s3)
s3.clear()
console.log(s3)

// for ... of 
// 순회 순서는 삽입 순
const s4 = new Set()
s4.add(4).add(2).add(1).add(3)

s4.forEach((v, i, s) => {
    console.log(v, i, s)
})

// 교집합 구현
Set.prototype.intersection = function(s) {
    const result = new Set()

    s.forEach((v, i, s) => {
        if(this.has(v)) {
            result.add(v)
        }
    })
//    for(const v of s) {
//         if(this.has(v)) {
//             result.add(v)
//         }
//     }

    return result
}

const s5 = new Set([1, 3, 5, 7, 9])
const s6 = new Set([3, 4, 6, 8, 7])

console.log(`intersection:`, s5.intersection(s6))


// 합집합 구현
Set.prototype.union = function(s) {
    const result = new Set([...this, ...s])
    return result
}

const s7 = new Set([1, 3, 5, 7, 9])
const s8 = new Set([0, 2, 4, 8, 10])

console.log(`union:`, s7.union(s8))



// 차집합 구현
Set.prototype.difference = function(s) {
    const result = new Set()

    for(const v of this) {
        if(s.has(v) == false)
        {
            result.add(v)
        }
    }

    return result
}


const s9 = new Set([1, 3, 5, 7, 9])
const s10 = new Set([5, 2, 4, 9, 10])

console.log(`difference:`, s9.difference(s10))
console.log(`difference:`, s10.difference(s9))

// 부분집합(subset) , 상위집합(superset)
Set.prototype.isSubset = function(s) {
    for(const v of this) {
        if(s.has(v) == false)
            return false
    }

    return true
}

Set.prototype.isSuperset = function(s) {
    return s.isSubset(this)
}

const s11 = new Set([1, 2, 4, 6, 8, 16])
const s12 = new Set([2, 4, 6])
const s13 = new Set([1, 2, 6, 16])
const s14 = new Set([1, 6])

console.log(`isSuperset:`, s11.isSuperset(s12))
console.log(`isSuperset:`, s11.isSuperset(s13))
console.log(`isSuperset:`, s11.isSuperset(s14))
console.log(`isSuperset:`, s13.isSuperset(s14))
console.log(`isSuperset:`, s13.isSuperset(s12))

console.log(`isSubset:`, s12.isSubset(s11))
console.log(`isSubset:`, s13.isSubset(s11))
console.log(`isSubset:`, s14.isSubset(s11))
console.log(`isSubset:`, s14.isSubset(s13))
console.log(`isSubset:`, s12.isSubset(s13))







