import { createContext, useContext, useState } from "react";

const UserContext = createContext(null)

// this is a component only
export function UserProvider({children}) {
    const [user, setUser] = useState("Mohit")

    // provider
    return <UserContext value={{user, setUser}}>
        {children}
    </UserContext>
}

//for using the values
export function useUser() {
    const context = useContext(UserContext)

    return context
}