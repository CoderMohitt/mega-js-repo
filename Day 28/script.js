function sumArray(arr) {
    let sum = 0

    for(let elem of arr) {
        sum = sum + elem //elem = 1, sum = 1, elem = 2, sum = 3....
    }

    console.log(sum)
}

function maxArr(arr) {
    let max = arr[0]

    for(let i of arr) {
        if(i > max) max = i
    }

    console.log(max)
}

function removeDuplicates(arr) {
    let ans = []

    for(let elem of arr) {
        if(ans.includes(elem) === false) ans.push(elem) 
        // ans ke andar agar element nahi hai
    }

    console.log(ans)
}

function calcAvg(obj) {
    let total = 0
    for(let mark of obj.marks) {
        total = total + mark
    }

    let ans = total / obj.marks.length

    console.log(ans)
}

let info = {
    name: "ram",
    age: 32,
    marks: [23, 45, 23, 45]
}

// calcAvg(info)

// elem = 1, ans = [1], 
// elem = 1, ans = [1, ]

const arr = [1, 1, 2, 2, 3, 3, 4, 4]
// removeDuplicates(arr)

// max = 10
// i = 10, 10 > 10

// max = 10
// i = 2, 2 > 10

// max = 10
// i = 30, 30 > 10, max = 30

// max = 30
// i = 4, 4 > 30

// max = 30
// i = 50, 50 > 30, max = 50

let a = [10, 2, 30, 4, 50] //15
// sumArray(a)
// maxArr(a)

// console.log(!a.includes(100))
// console.log(!true)
// console.log(!false)

// function printAns(arr) {
//     for(let elem of arr) {  
//         if(elem.name === "Bottle") console.log(elem)
//     }
// }

let products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 50 },
  { name: "Bag", price: 500 },
  { name: "Bottle", price: 150 },
  { name: "Bottle", price: 150 },
  { name: "Bottle", price: 150 },
  { name: "Bottle", price: 150 }
];

// printAns(products)

function printTable(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`)
    }
}

// printTable(5)


function countOcc(sent) {
    let arr = sent.split(" ")
    let obj = {}

    for(let elem of arr) {
        obj[elem] = (obj[elem] || 0) + 1
    }

    console.log(obj)
}

let sentence = "the cat sat on the mat the cat ran";

countOcc(sentence)

let ans = {
    the: 3,
    sat: 2
}


ans["the"] = ans['the'] + 1
ans["sat"] = ans["sat"] + 2
ans["mat"] = ans["mat"] + 1

console.log(0 || undefined)