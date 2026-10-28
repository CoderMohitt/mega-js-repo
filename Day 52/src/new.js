const user = {
    name: "mohit",
    email: "abc"
}

let newUser = {...user, name: "ram"}
newUser = {...user, ["name"]: "xyz"}

console.log(newUser["name"])