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
// import {str as xyz, arr, hello as h, hello2} from './module.js'
// console.log(xyz)


/*************************** 
    #4 모든 데이터를 한번에 내보내기 (*)
*****************************/
// import * as ABC from './module.js'
// console.log(ABC) // Module {...}
console.log(ABC.str)






