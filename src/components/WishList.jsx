import { useNavigate } from 'react-router-dom'
import List from './List'
import NoResults from './NoResults'
import styles from './WishList.module.css'
import { WiStars } from "react-icons/wi";
import { useDetails } from '../../contexts/DetailsContext';

function WishList() {
    const {wishList,setWishList,setCart,cart} = useDetails()
    const navigate = useNavigate()
    function buyAll(){
        const newCart = [...cart,...wishList]
        setCart(newCart)
        navigate('/order')
        setWishList([])


    }
    return (
        <div>
            {wishList?.length === 0  ? <NoResults/>
            :
            <>
            <h1 className={styles.head}>WishList <WiStars className={styles.emoji}/></h1>
            <div className={styles.outer}>
            <div className={styles.lists}>
            {wishList.map(list => <List list={list} wishList={wishList} setWishList={setWishList} setCart={setCart} cart={cart}/>)}
            </div>
            </div>

            <div className={styles.btns}>
            {wishList.length > 1 &&
            <button onClick={buyAll} className={styles.buyAll}>Buy All</button>
}
            <button onClick={()=>navigate(-1)} className={styles.back}>Back</button>
            </div>
            </>
}
           
        </div>
    )
}

export default WishList
