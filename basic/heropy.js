import {birthKey, emailsKey} from './keys.js'

export default {
  firstName: 'f',
  lastName: 'l',
  age: 38,
  [birthKey]: new Date(1989, 11, 16, 17, 30),
  [emailsKey]: ['thesecon@gmail.com', 'abc@naver.com']

}