import styles from './Filter.module.css'

function Filter({category,setCategory}) {
    
    return (
        <div className={styles.outer}>
            <select value={category} onChange={(e)=>setCategory(e.target.value)} className={styles.filter}>
                <option value="">Select Category</option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="women's clothing">women's clothing</option>
                <option value="electronics">electronics</option>
            </select>
        </div>
    )
}

export default Filter
