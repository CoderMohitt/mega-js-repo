const btn = document.getElementById("btn")

function onClick(a, b, c) {
    console.log("clicked")
}

// btn.addEventListener("click", onClick)

// btn.addEventListener("click", function() {
//     console.log("anonymus function")
// })

// onClick()

// btn.addEventListener("click", (e) => {console.log(e)})

// btn.addEventListener("dblclick", () => {console.log("double clicked")})

// btn.addEventListener("mouseenter", () => {console.log("mouse enter")})

// btn.addEventListener("mouseleave", () => {console.log("mouse leave")})

// const event = {
//     key: "h"
// }

// console.log(event.key)

// document.addEventListener("keydown", (event) => {
//     // console.log("key pressed")
//     console.log(event.key)
// })

// document.addEventListener("keyup", () => {console.log("key pressed")})

// const ipt = document.getElementById("ipt")

// // console.log(ipt.value)

// btn.addEventListener("click", () => {console.log(ipt.value)})

const name = document.getElementById("name")
const email = document.getElementById("email")
const form = document.getElementById("form")

// console.log(name.value)
// console.log(email.value)

// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     console.log(name.value)
//     console.log(email.value)
// })

const list = document.getElementById("list")

list.addEventListener("click", (e) => {
    console.log(e.target.textContent)
})

const first = document.querySelector(".one")
const first = document.querySelectorAll(".one")