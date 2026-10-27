import { useState } from "react"

function Demo() {
    const [count, setCount] = useState(0)

    function handleClick(value) {
        // console.log("clicked", value)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }

    function greet(name) {
        console.log("hello", name)
    }

    return <>
        {/* <button onClick={handleClick}>click</button> */}
        {/* <button onClick={() => console.log("clicked")}>click</button> */}
        {/* <p>{count}</p> */}
        {/* <button onClick={handleClick}>click</button> */}
        {/* <button onClick={() => handleClick(5)}>click</button> */}
        {/* <button onClick={() => greet("mohit")}>click</button> */}

        <Skills />
    </>
}











function Skills() {
    const [skills, setSkills] = useState(["html", "css", "js", "tailwind", "react"])

    function removeSkill(skillName) { // html
        setSkills(skills.filter(x => x !== skillName))
    }

    return <>
        <p>{skills.map(x => (
            <div>
                <p>{x}</p>
                <button onClick={() => removeSkill(x)}>delete</button>
            </div>
        ))}</p>
    </>
}

export default Demo