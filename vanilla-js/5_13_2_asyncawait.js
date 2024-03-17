// promise의 가독성 저하 코드 예시
// 서버로 요청을 보내고 응답을 보낸 후 응답받은 결과를 바탕으로 다시
// 서버로 요청을 보내는 코드

/* function myFunction() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: { "content-type": "application/json;charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    });
} */

async function myFunction() {
  const res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const res1Json = await res1.json();
  console.log(res1Json);

  const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: { "content-type": "application/json;charset=UTF-8" },
  });
  const res2Json = res2.json();
  console.log(res2Json);
}

myFunction();
