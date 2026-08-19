import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import styles from './Reset.module.css'
import { useDetails } from "../../contexts/DetailsContext";

function Reset() {
    const {userDetails,setUserDetails} = useDetails()
    const navigate = useNavigate()
    const [newPassword ,setNewPassword] = useState('')
    const [confirmPassword ,setConfirmPassword] = useState('')
    const [tempUserName,setTempUserName] = useState('')
    const [unHide,setUnhide] = useState(false)
    const [unConfirmHide,setConfirmUnhide] = useState(false)
   
    
    function handleReset(e){
        e.preventDefault()
        const isExists = userDetails.some(user => user.name === tempUserName)
        if(isExists){
            if(newPassword === confirmPassword){
                const newUserDetails = userDetails.filter(user => user.name !== tempUserName) 
                console.log(newUserDetails)
                setUserDetails(newUserDetails)
                 const obj = {
                              name:tempUserName,
                              password:newPassword
                           }
                setUserDetails([...newUserDetails,obj])
                setTempUserName("")
                setNewPassword("")
                setConfirmPassword('')
                console.log(userDetails)
                
            }else{
                alert("The password and confirm password do not match.")
            }
        }else{
            alert("the entered username does not exist")
        }
    }
    return (
        <div>
            <form onSubmit={handleReset} className={styles.reset}>

            <h1>Reset password</h1>
            <div className={styles.inputBox}>

            
            <input type="text" placeholder="userName" value={tempUserName} onChange={(e)=>setTempUserName(e.target.value)} required/>
            <br />
            <div>

            <input type={`${unHide ? "text" : "password"}`} placeholder="new password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required/><span onClick={()=>{setUnhide(hide => !hide)}}>{unHide ? <FaRegEye className={styles.emoji} size={20} color="#374151"/> : <FaRegEyeSlash className={styles.emoji} size={20} color="#6B7280"/>}</span>
            </div>
            <br />
            <div>

            <input type={`${unConfirmHide ? "text" : "password"}`} placeholder="confirm new password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/><span onClick={()=>{setConfirmUnhide(hide => !hide)}}>{unConfirmHide ? <FaRegEye className={styles.emoji} size={20} color="#374151"/> : <FaRegEyeSlash className={styles.emoji} size={20} color="#6B7280"/>}</span>
            </div>
            <br />
            </div>
            <div className={styles.btns}>

            <button type="submit" >Submit </button>
            <button onClick={(e)=> { e.preventDefault() ;
                navigate(-1)}}>Back</button>
            </div>
            
            </form>
            
        </div>
    )
}

export default Reset
