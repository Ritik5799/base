import { useContext } from "react"
import UserContext from "./UserContext"

function Setting(){
    const {user , setUser}=useContext(UserContext);
    return (
        <>
            <button onClick={() => user.setUser({
                ...user,
                name : "LPU"
            })}>
                Change name
            </button>
        </>
    )
}

export default Setting;