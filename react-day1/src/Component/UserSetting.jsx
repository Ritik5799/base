function UserSetting({setname}){
    return(
        <button onClick={() => setname("LPU")} >
            Change name
        </button>
    )
}


export default UserSetting;