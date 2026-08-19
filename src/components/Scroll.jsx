
import styles from './Scroll.module.css'

function Scroll({product}) {
    return (
        <div className={styles.cardItem}>
           
                            <img src={product.image} alt="" className={styles.img}/>
                            <p>{product.title}</p>
                            
                        
        </div>
    )
}

export default Scroll
