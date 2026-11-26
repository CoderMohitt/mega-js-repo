import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const exists = localStorage.getItem("user");
    return exists ? JSON.parse(exists) : {};
  });

  console.log(user)

  function login(username, email) {
    const newUser = { username, email };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  function logout() {
    localStorage.removeItem("user");
    setUser({})
  }

  return <AuthContext value={{ user, login, logout }}>{children}</AuthContext>;
}

export function useAuth() {
  const context = useContext(AuthContext);  

  return context;
}
