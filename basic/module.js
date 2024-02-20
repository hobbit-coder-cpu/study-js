// import 키워드는 파일(모듈)의 최상단에 작성 해야함.

/*************************** 
    #1 default
*****************************/
// default 는 단 1번만 사용 가능 

// 내보내기
export default 123

// 가져오기
// import number from './module.js'
// console.log(number)

/*************************** 
    #2 이름 내보내기 ({})
*****************************/

// 내보내기
export const str = 'ABC'
export const arr = []
export const hello = () => {}
export function hello2() {} 

// 가져오기
// import {str, arr, hello, hello2} from './module.js'
// console.log(str)

// 가져오기 #2 (default, 이름 모두 가져오기)
// import number, {str, arr, hello, hello2} from './module.js'

/*************************** 
    #3 이름 바꿔 내보내기 (as)
*****************************/
// 가져오기
// import {str as xyz, arr, hello as h, hello2} from './module.js'
// console.log(xyz)


/*************************** 
    #4 모든 데이터를 한번에 내보내기 (*)
*****************************/

// 가져오기
// import * as ABC from './module.js'
// console.log(ABC) // Module {...}
// console.log(ABC.str)


/*************************** 
    #5 동적으로 내보내기 (import().then())
*****************************/
// 가져오기
// import('./module.js').then((abc) => {
//     console.log(abc) // Module {...}
// })

// 가져오기 #2
// const abc = await import('./module.js')

/*************************** 
    #6 가져오자마자 내보내기(모듈 모으기) (export from)
*****************************/
/*
-- utils.js
export {a} from './a.js'
export {b} from './b.js'

-- a.js
export const a = () => 123

-- b.js
export const b = () => 456

-- main.js
import {a, b} from './utils.js'

*/






