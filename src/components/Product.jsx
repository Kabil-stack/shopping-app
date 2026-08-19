import { useNavigate } from 'react-router-dom'
import styles from './Product.module.css'
function Product({product}) {
    const navigate = useNavigate()
    const id = product.id
    function showDetails(){
        navigate(`/products/details/${id}`)
    }
    return (
        <div className={styles.product} onClick={showDetails}>
            <img src={product.image}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default Product
