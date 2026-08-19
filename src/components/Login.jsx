import { useNavigate } from "react-router-dom";
import LogOut from "./LogOut";
import {  useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import styles from './Login.module.css'
import { useDetails } from "../../contexts/DetailsContext";

function Login() {
    const {userDetails,setIsLogged,isLogged,userName,setUsername,passWord,setPassWord,rememberUser,setRememberUser} = useDetails()
      const navigate = useNavigate()
      const [unHide,setUnhide] = useState(false)
      const [rememberMe,setRememberMe] = useState(false)
      
      function handleRegister(){
        navigate('/register')
      }

      function handleLogin(e){
        e.preventDefault()
        const hasUserName = userDetails.some(details => {
            const isTrue = details.name === userName && details.password === passWord;
            
            return isTrue
        })
        if(hasUserName){
            setIsLogged(true)
            setRememberMe(false)
        }else{
            alert("Invalid username or password!")
        }
      }

      useEffect(()=>{
        if(rememberMe){
            if(userName && passWord){
                setRememberUser({
                username:userName,
                password:passWord
            })
            
            }else{
                setUsername(rememberUser.username);
                setPassWord(rememberUser.password)
            }
            
        }
      },[rememberMe])
      
    return (
        <div>
            {isLogged ? <LogOut userName={userName} setUsername={setUsername} setPassWord={setPassWord} setIsLogged={setIsLogged}/>
            :
            <div className={styles.login}>
            <form onSubmit={handleLogin} className={styles.form}>
                <h1>Login</h1>
                <div className={styles.inputbox}>
                <input type="text" placeholder="username" onChange={(e)=> setUsername(e.target.value)} value={userName} required />
                <br />
                <input type={`${unHide ? "text" : "password"}`} placeholder="password" onChange={(e)=> setPassWord(e.target.value)} value={passWord} required/><span onClick={()=>{setUnhide(hide => !hide)}}>{unHide ? <FaRegEye className={styles.emoji}  size={25} color="brown"/> : <FaRegEyeSlash className={styles.emoji} size={25} color="brown"/>}</span>
                <br />
                </div>
                <div>
                    <div className={styles.check}>
                        
                        <span>
                            <p>
                        <input type="checkbox" checked={rememberMe} onChange={()=>setRememberMe(!rememberMe)}/>Remember me
                        
                        <a  onClick={()=> navigate('/reset')}>Forgot password?</a>
                        </p>
                        </span> 
                    </div>
                    
                    
                        
                     
                     <button type="submit">Login</button>
                     <p>Don't have an account? <span onClick={handleRegister}>Register</span></p>

                    
                </div>
            </form>
            </div>
}
        </div>
    )
}

export default Login
