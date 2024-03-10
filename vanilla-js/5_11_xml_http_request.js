/**
 * XMLHttpRequest 객체는 서버와 상호작용하기 위해 사용됩니다.
 * 전체 페이지를 새로 고침하지 않아도 URL을 통해 데어터를 전송하거나
 * 받아올 수 있습니다.
 * XMLHttpRequest객체는 Web API
 */

// 객체 생성
/* 
const xhr = new XMLHttpRequest();

// method 세팅. GET, POST, PUT, PATCH, DELETE
xhr.open("POST", "/posts");

// 전송 데이터 타입 설정. content-type: application/json, text/plain, multipart/form-data
xhr.setRequestHeader("content-type", "application/json");

const data = {
  id: 2,
  title: "XMLHttpRequest",
  author: "Jeremy",
};

// 전송
xhr.send(JSON.stringify(data));

// 응답
xhr.onload = () => {
  if (xhr.status === 200) {
  }
};
 */

// https://jsonplaceholder.typicode.com/ - 테스트용 사이트

// GET
const xhr1 = new XMLHttpRequest();

xhr1.open("GET", "https://jsonplaceholder.typicode.com/posts/2");

xhr1.send();

xhr1.onload = () => {
  if (xhr1.status === 200) {
    console.log("[GET]");
    const res = JSON.parse(xhr1.response);
    console.log(res);
  }
};

// POST
const xhr2 = new XMLHttpRequest();
xhr2.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr2.setRequestHeader("content-type", "application/json");
const data2 = {
  userId: 10,
  title: "KOREA",
  body: "body",
};
xhr2.send(JSON.stringify(data2));
xhr2.onload = () => {
  console.log("[POST]");
  if (xhr2.status === 201) {
    // 201: 성공, 자원생성되었음. POST 요청에 대한 응답 결과
    console.log(JSON.parse(xhr2.response));
  }
};

// PUT
const xhr3 = new XMLHttpRequest();
xhr3.open("PUT", "https://jsonplaceholder.typicode.com/posts/4");
xhr3.setRequestHeader("content-type", "application/json");
const data3 = {
  userId: 123,
  //title: "KOREA",
  //body: "body",
};
xhr3.send(JSON.stringify(data3));
xhr3.onload = () => {
  console.log("[PUT]");
  if (xhr3.status === 200) {
    console.log(JSON.parse(xhr3.response));
  }
};

// PATCH
const xhr4 = new XMLHttpRequest();
xhr4.open("PATCH", "https://jsonplaceholder.typicode.com/posts/50");
xhr4.setRequestHeader("content-type", "application/json");
const data4 = {
  userId: 1234,
};
xhr4.send(JSON.stringify(data4));

xhr4.onload = () => {
  console.log("[PATCH]");
  console.log(JSON.parse(xhr4.response));
};

// DELETE
const xhr5 = new XMLHttpRequest();
xhr5.open("DELETE", "https://jsonplaceholder.typicode.com/posts/25");
xhr5.send();
xhr5.onload = () => {
  if (xhr5.status === 200) {
    console.log("[DELETE]");
    console.log(JSON.parse(xhr5.response));
  }
};
