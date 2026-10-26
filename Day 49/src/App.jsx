import { useState } from "react";

function Card({ name, role, age, isStudent, subs }) {
  console.log(subs);
  return (
    <>
      <h1>{name}</h1>
      <p>{role}</p>
      <p>{age}</p>
      <p>{subs.join(", ")}</p>
    </>
  );
}

function Btn({ color = "blue", text = "click me" }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}

function Demo({children, title}) {
  return <>
    <h4>{title}</h4>
    {children}
  </>
}









function Avatar({ src, name }) {
  return <img  src={src} alt={name} />;
}

function UserInfo({ name, role }) {
  return (
    <div>
      <h3 >{name}</h3>
      <p>{role}</p>
    </div>
  );
}

function UserCard({ name, role, src }) {
  return (
    <div >
      <Avatar src={src} name={name} />
      <UserInfo name={name} role={role} />
    </div>
  );
}

function Demo1({fn}) {
  return <button onClick={fn}>click</button>
}


function App() {
  const [count, setCount] = useState(0)

  function inc() {
    setCount(count => count + 1)
    setCount(count => count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    console.log(count)
  }
  function random() {
    console.log("click")
  }
  return (
    <>
    <button onClick={inc}>click</button>
    <p>{count}</p>
    {/* <Demo1 fn={random} /> */}
      {/* <UserCard name={"Mohit"} role={"Web Dev"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5TGfozDvDJg6shlLGnB4vVStEtsdgjqsSLWcH0q8xySETLF50Pp5385tq&s=10"} />
      <UserCard name={"Saurabh"} role={"Data analyst"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5TGfozDvDJg6shlLGnB4vVStEtsdgjqsSLWcH0q8xySETLF50Pp5385tq&s=10"} /> */}
      {/* <Card name="Mohit" role="Developer" age="23" isStudent subs={["phy", "che"]} obj={{city: "delhi"}} />
        <Card name="Ram" role="Data Analyst" age={34} isStudent={false} subs={["phy", "che"]} />
        <Card name="Ram" role="Data Analyst" age={34} subs={["phy", "che"]} /> */}

      {/* <Btn />
      <Btn color="red" text="mujhe maro" /> */}

      {/* <Demo title={"this is title"}>
        <h1>i did some experiment</h1>
        <i>this is italic</i>
      </Demo> */}
    </>
  );
}

export default App;
