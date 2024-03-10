// 함수 선언식
function hello(name) {
  return "hello" + name;
}

// 함수 표현식
const hello2 = function (name) {
  return "hello" + name;
};

// 화살표 함수
// 화살표 함수 내의 this는 언제나 상위 스코프의 this를 가리킨다.
const hello3 = (name) => {
  return "hello" + name;
};
const hello4 = (name) => {
  return "hello" + name;
};
const hello5 = (name) => "hello" + name;
