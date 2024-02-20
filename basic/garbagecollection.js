// 가비지 컬렉션(GC, Garbage Collection, 쓰레기 수집)
// 메모리에서 더 이상 사용되지 않는 데이터를 해제하는 것
let a = {x: 1}
let b = a

b.x = 2
console.log(b)
console.log(a)

const user = {
  name: 'heropy',
  age: 85,
  emails: ['thesecon@gamil.com', 'heropy@abc.com']
}

delete user.emails
console.log(user)