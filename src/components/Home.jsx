import Scroll from "./Scroll"
import styles from './Home.module.css'
import { useDetails } from "../../contexts/DetailsContext"

function Home() {
    const {allProducts} = useDetails()
    return (
        <div className={styles.slider}>
           
                <div className={styles.cardList}>
                   
                    {allProducts.map(product => <Scroll product={product} id={product.id}/>)}
                    
                </div>
           
        </div>
    )
}

export default Home
