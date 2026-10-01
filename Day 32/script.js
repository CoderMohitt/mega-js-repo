// const list = document.getElementById("list")

// list.addEventListener("click", (event) => {
//     console.log(event.target.textContent)
// })

const add = (a, b) => a + b // return a + b

const ans = add(23, 23)

// console.log(ans)

// const arr = [43, 23, 56, 34, 56]

//a, b, c, d
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3]

// let [a, b, c, d, e] = arr

// console.log(a, b, c, d)

// " "

// const arr = ["apple", "banana", "cherry"]

// const [a, b, c, d = "grapes"] = arr

// console.log(d)

// let {name: a, age: b, city: c, course: d, country = "India"} = obj

// console.log(a, b, c, d, country)

function info({name, age, city, course}) {
    console.log(name, age, city, course)
}

function arr([a, b, c, d]) {
    console.log(a, b, c, d)
}

const obj = {
    name: "ram",
    age: 22,
    city: "delhi",
    course: "web dev"
}

const {name, age, city, course} = obj

function information({name, age, city, course}) { // info will be an object - {name, age, city, course} = info
    // const {name, age, city, course} = info

    console.log(name, age, city, course)
}

// info(obj)
// arr([2, 3, 4, 5])

// information(obj)

// spread operator (...)

const nums = [1, 2, 3]
const nums1 = [4, 5, 6]

const copy = [...nums, ...nums1] // ...nums now is an array

// console.log(copy)

const obj1 = {
    name: "ram",
    age: 22,
    city: "delhi",
    course: "web dev"
}

const objcopy = {...obj1, age: 30, hobby: "cricket"}

// console.log(objcopy)

function sum(a, b, c) {
    console.log(a + b + c)
}

const newarr = [1, 2, 3, 4]

sum(...newarr)