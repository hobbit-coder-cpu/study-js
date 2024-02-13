// #7 N.textContent

const el = document.querySelector('.child')
console.log(el.textContent)

el.textContent = '7'
console.log(el.textContent)

// #8 E.innerHTML

const el8 = document.querySelector('.parent')
console.log(el8.innerHTML)

/* Comment Tagged  Template*/
el8.innerHTML =/* html */`
<div style="border: 4px solid">
    <span style="color: red;">Hello</span>
    <span style="color: blue;">Hello</span>
</div>`
