import UserContext from "./UserContext";
import { useContext } from "react";

function Profile() {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>Name : {user.name}</h1>
            <h1>Place : {user.place}</h1>
            
        </>
    );
}

export default Profile;