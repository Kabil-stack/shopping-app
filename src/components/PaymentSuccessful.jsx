import { useNavigate } from "react-router-dom"
import styles from './PaymentSuccessful.module.css'
import { SiTicktick } from "react-icons/si";
function PaymentSuccessful() {
    const navigate = useNavigate()

    return (
        <div className={styles.payment}>
            
           

            <h1>Payment successful <SiTicktick className={styles.emoji}/></h1>
            
            
            <button onClick={()=> navigate('/products')}>Go to products</button>
        </div>
    )
}

export default PaymentSuccessful
