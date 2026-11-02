import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      const user = await res.json();

      setUsers(user);
    }

    fetchData();
  }, []);

//   useEffect(async () => {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const user = await res.json();

//     setUsers(user);
//   }, []);

  return (
    <>
      <h1>this is user</h1>

      {users.length > 0 &&
        users.map((user) => (
          <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
          </div>
        ))}
    </>
  );
}

export default User;
