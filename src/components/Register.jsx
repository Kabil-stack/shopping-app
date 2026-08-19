import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import styles from './Register.module.css'
import { useDetails } from "../../contexts/DetailsContext";

function Register() {
    const {setUserDetails} = useDetails()
    const [userName,setUserName] = useState("")
    const [passWord,setPassWord] = useState("")
    const [confirmPassWord,setConfirmPassWord] = useState("")
    const navigate = useNavigate()
    const [unHide,setUnhide] = useState(false)
    const [unConfirmHide,setConfirmUnhide] = useState(false)

    
    function handleRegister(e){
        e.preventDefault()
        if(passWord === confirmPassWord){
            const newUserDetails = {
      name:userName,
      password:passWord
    }
    setUserDetails(details => [...details,newUserDetails])
    setUserName("")
    setPassWord("")
    navigate('/login')
    return
        }
        alert("The password and confirmation password do not match.")
    
        

    }
    return (
        <div className={styles.outer}>

            <form onSubmit={handleRegister} className={styles.register}>
                <h1>Register</h1>
                <div>

                <p>UserName : </p><input type="text" placeholder="userName"
                value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
                <br />
                </div>
                <div>
                <p>Password : </p><input type={`${unHide ? "text" : "password"}`}  placeholder="Enter password" value={passWord} onChange={(e)=>setPassWord(e.target.value)} required/><span onClick={()=>{setUnhide(hide => !hide)}}>{unHide ? <FaRegEye className={styles.emoji}/> : <FaRegEyeSlash className={styles.emoji}/>}</span>
                <br />
                </div>
                <div>
                <p>Confirm password : </p><input type={`${unConfirmHide ? "text" : "password"}`}  placeholder="Enter password" value={confirmPassWord} onChange={(e)=>setConfirmPassWord(e.target.value)} required/><span onClick={()=>{setConfirmUnhide(hide => !hide)}}>{unConfirmHide ? <FaRegEye className={styles.emoji} /> : <FaRegEyeSlash className={styles.emoji}/>}</span>
                <br />
                </div>
                <div className={styles.btns}>

                <button type="submit">Confirm</button>
                <button onClick={(e)=>{e.preventDefault();
                    navigate('/login')}}>back</button>
                </div>

            </form>
            
        </div>
    )
}

export default Register
