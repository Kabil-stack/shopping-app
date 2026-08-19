import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "./Loader"
import styles from './ProductDetails.module.css'
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";

import { useDetails } from "../../contexts/DetailsContext";

function ProductDetails() {
    const {setWishList,wishList,setCart,cart,setIsLoading,isLoading} = useDetails()

    const params = useParams()
    const [details,setDetails] = useState([])
    const disabled = wishList.some(item => item.id === details.id)
    const isExists = cart.some(detail => detail.id === details.id)
    console.log(disabled)
    const navigate = useNavigate()
    console.log(wishList)
    function buyNow(){
        
        if(!isExists){
        setCart(cart => [...cart,details])
        navigate('/order')
        }
    }
    useEffect(()=>{
        async function getProductDetails() {
            setIsLoading(true)
            try{
                const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const data = await res.json()
            setDetails(data)
        }catch(err){
            console.log(err.message)
        }finally{
            setIsLoading(false)
        }
            }
            
        getProductDetails()
    },[])

    function addWishList(){
        if(wishList){

            const newList = [...wishList,details]
            
            setWishList(newList)
        }
        
        
    }
    return (
        <div>
            {isLoading ? <Loader />
            :
            <div className={styles.outer}>
            <div className={styles.details}>
            <img src={details.image} />
            <span onClick={addWishList} disabled={disabled} className={styles.heart} >{disabled ? <GoHeartFill 
            size="40" color="#B91C1C" className={styles.emoji}/> : <GoHeart size="40"color="red" className={styles.emoji}/>}</span>
            <div className={styles.texts}>
            <h3>{details.title}</h3>
            <p>{details.description}</p>
            <p>${details.price}</p>
           
            </div>
            <div className={styles.btns}>
            <button onClick={buyNow} disabled={isExists } >Add to cart</button>
            <button onClick={()=> navigate(-1)}>Go Back</button>
            </div>
            </div>
            </div>
}
       
        </div>
    )
}

export default ProductDetails
