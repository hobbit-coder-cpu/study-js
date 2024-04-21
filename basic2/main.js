console.log("HEROPY");

// 1. 개요

/**
 * [표기법]
 * dash-case(kebab-case): HTML, CSS / the-quick-brown-fox-jumps-over-the-lazy-dog
 * snake_case: HTML, CSS / the_quick_brown_fox_jumps_over_the_lazy_dog
 * camelCase: JS / theQuickBrownFoxJumpsOverTheLazyDog
 * PascalCase: JS / TheQuickBrownFoxJumpsOverTheLazyDog
 */
/**
 * [Zero based number]
 */
/**
 * [주석]
 * 한 줄 메모: //
 * 여러 줄 메모: \/**\/
 */

// 2. 데이터 종류
/**
 * String
 * Number
 * Boolean
 * Undefined
 * Null
 * Object
 * Array
 */

// String(문자 데이터)
let myName = "HEROPY"; // 큰따옴표
let email = "thescecon@gmail.com"; // 작은따옴표
let hello = `Hello ${myName}?!`; // 백틱

console.log(myName);
console.log(email);
console.log(hello);

// Number(숫자 데이터)
// 정수 및 부동소수점 수자를 나타낸다.
let number = 123;
let opacity = 1.57;

console.log(number);
console.log(opacity);

// Boolean(불린 데이터)
// true, false 두가지 값밖에 없는 노리 데이터
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined
// 값이 할당되지 않은 상태
let undef;
let obj = { abc: 123 };

console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

// Null
// 어떤 값이 의도적으로 비어 있음을 의미
let empty = null;

console.log(empty);

// Object(객체 데이터) {}
// 여러 데이터를 Key:Value 형태로 저장
let user = {
  name: "HEROPY",
  age: 85,
  isValid: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);
console.log(user);

// Array( 배열 데이터) []
// 여러 데이터를 순차적으로 저장
let fruits = ["Apple", "Banan", "Cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3. 변수, 예약어
/**
 * 변수
 * let, const
 * 재사용, 재할당(let)
 */
let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

/**
 * 예약어
 * this, if, break
 */

// 4. 함수
function helloFunc() {
  console.log(1234);
}

helloFunc();

function returnFunc() {
  return 123;
}

function sum(a, b) {
  return a + b;
}

// 기명(이름이 있는) 함수
function hellof() {}

// 익명(이름이 없는) 함수
let world = function () {};

// 객체 데이터
const heropy = {
  name: "HEROPY",
  age: 85,
  // 메소드
  getName: function () {
    return this.name;
  },
};

console.log(heropy);

// 5. 조건문
let isShow2 = true;
let checked2 = false;

if (isShow2) {
  console.log("");
}

if (checked2) {
  console.log("");
}

if (isShow2) {
} else {
}

// 6. DOM(Document Object Model) API(1)(2)
let boxEl = document.querySelector(".box");
console.log(boxEl);

// HTML 요소에 적용할 수 있는 메소드. event , handler
boxEl.addEventListener("click", function () {
  boxEl.classList.add("active");
  // boxEl.classList.remove("active");
});

const boxEls = document.querySelectorAll(".box");
console.log(boxEls);

// 찾은 요소를 반복해서 함수 실행
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});
