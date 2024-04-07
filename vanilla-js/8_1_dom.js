// [자바스크립트에서 HTML 요소(Element) 접근 방법]

// 1. 태그 명을 통해 HTML 요소를 찾는법
const el1 = document.getElementsByTagName();

// 2. 클래스 명을 통해 HTML 요소를 찾는법
const el2 = document.getElementsByClassName();

// 3. id 속성을 통해 HTML 요소를 찾는법
const el3 = document.getElementById();

// 4. CSS 선택자를 통해 HTML 요소를 찾는법
const el4 = document.querySelector();
const el5 = document.querySelectorAll();

// [CSS 선택자]
// 1. 태그 선택자(ABC)
//  EX) <p> p, <h1> h1
// 2. 클래스 선택자(.ABC)
//  EX)  <p class="orange"> .orange
// 3. ID 선택자(#ABC)
//  EX) <p id="unique"> #unique
// 4. 복합 선택자
// 4-1. 하위(Decendant) 선택자(ABC DEF)
//  EX) <section>
//        <div>
//           <h1>하위 선택자</h1>
//        </div>
//        <h1>하위 선택자</h1>
//      </section>
// section h1
// 4-2. 자식(Child) 선택자(ABC>DEF)
//  EX) <section>
//        <div>
//           <h1></h1>
//        </div>
//        <h1>자식 선택자</h1>
//      </section>
// section>h1
// 5.  형제 선택자
// 5-1. 인접 형제 선택자(ABC+DEF)
// EX)
//   <section>
//     <ul></ul>
//     <h1></h1>
//     <ul>인접 형제 선택자</ul>
//     <ul></ul>
//   </section>
//   h1+ul
// 5-2. 일반 형제 선택자(ABC~DEF)
// EX)
//   <section>
//     <ul></ul>
//     <h1></h1>
//     <ul>일반 형제 선택자</ul>
//     <ul>일반 형제 선택자</ul>
//   </section>
//   h1~ul
// 6. 속성 선택자(E[attr="val"])
// EX)
//   <input type="checkbox"></input>
//   input[type="checkbox"]

// [HTML 요소의 속성 접근 방법]
document.getElementById("text1").getAttribute("value");
// document.getElementById("text1").setAttribute("value", "hello");
document.getElementById("text1").removeAttribute("value");

// [HTML 요소 내용 변경 방법]
// 자식 요소 삽입
document.querySelector("#sel").innerHTML = "<option>선택하세요</option>";
// 인접 요소 삽입
document.querySelector("#sel").insertAdjacentElement("pos", el1);
// beforebegin
// <ul>
// afterbegin

// beforeend
// </ul>
// afterend
