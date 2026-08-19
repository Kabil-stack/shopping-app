
import { useNavigate } from 'react-router-dom';
import styles from './Item.module.css'
import { FaXmark } from "react-icons/fa6";

function Item({item,cart,setCart}) {
    const navigate = useNavigate()
    
    function handleItems(){
        
        const newCart = cart.filter(ite => ite.id !== item.id)
        setCart(newCart)
        if(newCart.length === 0){
            navigate('/products')
        }
       

            
        
    }
    return (
        <div className={styles.item}>
            <img src={item.image}/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <FaXmark color="red" size="35" className={styles.xmark} onClick={handleItems}/>
        </div>
    )
}

export default Item
