// let h1 = document.getElementsByTagName("h1")
// let one = document.getElementById("one")
// let two = document.getElementById("two")
// let three = document.getElementById("three")
// let four = document.getElementById("four")

// // console.log(h1[0].textContent)
// // console.log(one.textContent)

// h1[0].textContent = "changed this h1"
// one.textContent = "changed with javascript"

// two.innerHTML = "<h1>hi there</h1>"

// // console.log(two.innerHTML)

// // console.log(three.src)
// // console.log(three.alt)

// three.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_m3IECfrQBoNJ3BBSgk6qMYVwfOaFwHd4k-OmHdtCQHdxp4KeEwTdXwao&s=10"

// four.href = "https://google.com"
// four.textContent = "click me"

// //mohit joshi -> mohitJoshi

// two.style.backgroundColor = "orange"
// two.style.fontSize = "40px"

// one.classList.add("common")
// one.classList.remove("common")

// // one.classList.toggle("common")

// // console.log(one.classList.contains("common"))

let five = document.getElementById("five")

let newLi = document.createElement("li")

newLi.textContent = "second item"

// five.appendChild(newLi)
// five.append(newLi)
five.prepend(newLi)

newLi.remove()

let six = document.getElementById("six")

for(let i = 0; i < 10; i++) {
    let newEl = document.createElement("li")
    newEl.textContent = `element ${i + 1}`

    six.appendChild(newEl)
}