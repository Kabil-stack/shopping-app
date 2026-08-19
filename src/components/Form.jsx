import { useNavigate } from "react-router-dom"
import styles from './Form.module.css'

function Form({price,setBalanceAmount,setIsPayment,balanceAmount,setCart}) {
    const navigate = useNavigate()

    console.log(balanceAmount)
    const submitForm = (e)=>{
        e.preventDefault()
        if(balanceAmount > price){
             setBalanceAmount(balance => balance - price)
            setIsPayment(true)
            setCart([])
            navigate('/payment')
        }else{
            alert("Insufficient balance");
        }
        
        
        
       
    }

    function goBack(e){
        e.preventDefault()
        navigate('/products')
    }
    return (
        <div>
            <form onSubmit={submitForm} className={styles.form}>
                

                <textarea type="text" placeholder="Enter your Address" required/>
                
                <br />
                

               <input type="mail" placeholder="Email" required/>
               
                <br />
               

               <input type="number" placeholder="Mobile number" required/>
               
                <br />
                
               
                <div className={styles.btns}>

                <button type="submit">Submit</button>
                <button onClick={goBack}>Go back</button>
                </div>
                <h2>Amount : <span className={styles.highlight}>${price.toFixed(2)}</span> </h2>
            </form>
        </div>
    )
}

export default Form
