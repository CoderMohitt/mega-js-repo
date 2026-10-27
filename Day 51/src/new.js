const user = {
    name: "ram",
    age: 34
}

const items = ["apple", "mango", "cherry", "peach"]
const a = [1, 2, 3, 4, 5]

const n = a.map(x => (x * x)) 
console.log(n)

const newuser = {...user, age: 23}
const newitems = [...items, "banana"]
const filteredItems = newitems.filter(x => x !== "mango")

console.log(filteredItems)

const c = () => {return 6}

console.log(c())


function demo(n) {
    console.log(n)
}

demo(4)

