import { useEffect } from "react"
import Filter from "./Filter"
import Product from "./Product"
import Loader from "./Loader"
import styles from './Products.module.css'
import { useDetails } from "../../contexts/DetailsContext"
import Error from "./Error"
function Products() {
    const {allProducts,category,setCategory,filteredProducts,setFilteredProducts,isLoading,isError} = useDetails()
    useEffect(()=>{
        const newFilteredProducts = allProducts.filter(product => product.category === category)
        setFilteredProducts(newFilteredProducts)
    },[category])
    return (
        <div>
            {isError ? <Error/>
            :
            <>
            {isLoading ? <Loader/>
            :
            <>
            <Filter category={category} setCategory={setCategory}/>
            {filteredProducts.length > 0 ?
            <div className={styles.outer}>
            <div className={styles.products}>
                {filteredProducts.map(product => <Product product={product} key={product.id}/>)}
            </div>
            </div>
            :
            <div className={styles.outer}>
            <div className={styles.products}>
            {allProducts.map(product => <Product product={product} key={product.id}/>)}
            </div>
            </div>
}               
</>
}
</>
}
        </div>
    )
}

export default Products
