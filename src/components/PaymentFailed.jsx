import { useNavigate } from "react-router-dom"
import styles from './PaymentFailed.module.css'
import { FaRegSadTear } from "react-icons/fa";
function PaymentFailed() {
    const navigate = useNavigate()
    return (
        <div className={styles.payment}>
            <h1>Payment Failed <FaRegSadTear className={styles.emoji}/></h1>
            <button onClick={()=> navigate('/products')}>Go to products</button>
        </div>
    )
}

export default PaymentFailed
