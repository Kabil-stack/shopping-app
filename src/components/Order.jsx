import { useState } from "react"
import Item from "./Item"
import Form from "./Form"
import { useNavigate } from "react-router-dom"
import styles from './Order.module.css'
import { useDetails } from "../../contexts/DetailsContext"

function Order() {
    
    const {cart,setIsPayment,setCart,balanceAmount,setBalanceAmount,isLogged,setPrice,price} = useDetails()
    const [isForm,setIsForm] = useState(false)
    const navigate = useNavigate()
    console.log(balanceAmount)
    console.log(price)
    

    function payItems(){
        
        if(isLogged){
            setIsForm(true)
            const totalPrice = cart.reduce((sum,item)=> sum + item.price,0);
            setPrice(totalPrice)
        }else{
            alert("You cannot order products without logging in.")
            navigate('/login')
        }

        
        
        
    }
    
    return (
        <div className={styles.order}>
            
            <h1>Order List </h1>
            <h4>Balance : <span className={styles.highlight}>${balanceAmount}</span></h4>
            {!isForm ? 
            <div>
            <div>
                {cart.map(item =><Item item={item} setPrice={setPrice} cart={cart} setCart={setCart}/>)}
            </div>
           
            
            <div className={styles.btns}>
            <button onClick={payItems}>Pay now</button>
            <button onClick={()=>navigate(-1)}>back</button>
            </div>
            
            
            </div>
            
            :
            <Form price={price} setBalanceAmount={setBalanceAmount} setIsPayment={setIsPayment} balanceAmount={balanceAmount} setCart={setCart}/>
}
        </div>
    )
}

export default Order
