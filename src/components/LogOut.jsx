import styles from './LogOut.module.css'
import { FaRegSmileBeam } from "react-icons/fa";

function LogOut({userName,setUsername,setPassWord,setIsLogged}) {
    function handleLogOut(){
        setUsername("")
        setPassWord("")
        setIsLogged(false)
    }
    return (
        <div className={styles.logOut}>
            <h1>Welcome , {userName} <FaRegSmileBeam className={styles.emoji}/></h1>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    )
}

export default LogOut
