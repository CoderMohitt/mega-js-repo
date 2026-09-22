// console.log("hello world")

// DRY -> dont repeat yourself

// for loop -> 

let n = 2

// for(let i = 1; i <= 10; i++) {
//     console.log(`${n} * ${i} = ${n * i}`)
// }

// while loop

let i = 1

// while(i <= 10){
//     console.log(i)
//     i++
// }

// i = 1 -> 1
// i = 2 -> 2
// i = 3, 4.....8
// i = 9 -> 9
// i = 10 -> 10
// i = 11

// 2 * 1 = 2

// console.log("out of the loop")
// i = 0 -> hello
// i = 1 -> hello
// i = 2 -> hello
// i = 3....8
// i = 9 -> hello
// i = 10 -> 

name = "sujal"
course = "web dev"
age = 5

// name is sujal course is web dev age is 50

// console.log("name is", name, "course is", course, "age is", age)
// console.log(`name is ${name}, course is ${course}, age is ${age}`)

// alert("hey there")

let correctpass = 1234
// let pass = prompt("enter pass")
let pass = ""

// console.log(pass)

// while(pass != correctpass){
//     pass = prompt("enter your pass : ")
// }
// let k = 1000
// while(k <= 10) {
//     console.log(k)
// }

// let j = 1
// do {
//     console.log("hii")
//     j++
// } while(j <= 10)

// break

// for(let i = 0; i <= 10; i++) {
//     if(i === 5) {
//         // break
//         continue
//     }

//     console.log(i)

// }

for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
    console.log("-----------------")
}

// i = 1 -> j = 1 -> (1, 1)
// i = 1 -> j = 2 -> (1, 2)
// i = 1 -> j = 3 -> (1, 3)
// i = 1 -> j = 4 -> out of the loop

// i = 2 -> j = 1 -> (2, 1)
// i = 2 -> j = 2 -> (2, 2)
// i = 2 -> j = 3 -> (2, 3)
// i = 2 -> j = 4 -> out of the loop

// i = 3 -> j = 1 -> (3, 1)
// i = 3 -> j = 2 -> (3, 2)
// i = 3 -> j = 3 -> (3, 3)
// i = 3 -> j = 4 -> out of the loop

// i = 4 -> out of the loop

console.log("out of the loop")