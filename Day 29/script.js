// console.log("hi there")

// const info = {
//     name: "js",
//     age: 34
// }

// let document = {
//     html: {
//         head: {
//             meta: {},
//             title: {}
//         },
//         body: {
//             h1: {},
//             div: {
//                 div: {},
//                 div: {},
//                 div: {},
//             }
//         }
//     }
// }

// console.log(document)

// let h1 = document.getElementById("one")
// let div = document.getElementById("two")
// let three = document.getElementsByClassName("three")
// let four = document.getElementsByTagName("p")

// [div.one, div.two, div.three]
// 0, 1, 2

// console.log(four[0])


let one = document.querySelector("#one")
let two = document.querySelector("#two")

let three = document.querySelectorAll(".three")

// console.log(three[0])

// for(let item of three) {
//     console.log(item)
// }


// function printValue2() {
    //     console.log("none")
    // }
    
function printValue(value) {
    console.log(value)
}

let val = 23

// arr.forEach(printValue) // printValue(1), printValue(2), printValue(3)
// 1, 2, 3, 4

// three.forEach(printValue)

// printValue(printValue2)

// printValue(34)


// arr.forEach(function (item) {
    //     console.log(item)
    // })
    
    // const func = (item) => item * 4
let arr = [1, 2, 3, 4]

arr.forEach((item) => console.log(item))


function print(val) {
    val() // fu()
}

const fu = function() {
    console.log("called externally")
}

print(fu)
fu()