/**
 * Fetch API와 XMLHttpRequest의 가장 큰 차이점은 Fetch API는 Promise 방식으로
 * 구현되어 있다는 점입니다.
 */

// GET
fetch("https://jsonplaceholder.typicode.com/posts/2")
  .then((response) => response.json())
  .then((json) => console.log("[GET]", json));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "jungwon",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log("[POST]", json));

// PUT
fetch("https://jsonplaceholder.typicode.com/posts/2", {
  method: "PUT",
  body: JSON.stringify({
    // title: "jungwon",
    body: "bar",
    // userId: 1,
  }),
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log("[PUT]", json));

// PATCH
fetch("https://jsonplaceholder.typicode.com/posts/2", {
  method: "PATCH",
  body: JSON.stringify({
    body: "jw",
  }),
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log("[PATCH]", json));

// DELETE
fetch("https://jsonplaceholder.typicode.com/posts/3", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((json) => console.log("[DELETE]", json));

// let formData = new FormData();
// let fileField = document.querySelector('input[type="file"]');

// formData.append("username", "abc123");
// formData.append("attachment", fileField.files[0]);
