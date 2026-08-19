import { useNavigate } from "react-router-dom"
import styles from './List.module.css'

function List({list,wishList,setWishList,setCart,cart}) {
    const navigate = useNavigate()
    function deleteItem(){
        const newList = wishList.filter(li => li.id !== list.id)
        setWishList(newList)
    }

    function addToCart(){
        const newCart = [...cart,list]
        setCart(newCart)
        navigate('/order')
        const newWishList = wishList.filter(li => li.id !== list.id)
        setWishList(newWishList)

    }
    return (
        <div className={styles.list}>
            <img src={list.image}/>
            <h1>{list.name}</h1>
            <p>{list.description}</p>
            <h4>${list.price}</h4>
            <div className={styles.btns}>

            <button onClick={deleteItem}>Delete</button>
            <button onClick={addToCart}>Pay now</button>
            </div>
            
        </div>
    )
}

export default List
