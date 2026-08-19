import styles from './NoResults.module.css'
import { BsEmojiSmileUpsideDown } from "react-icons/bs";


function NoResults() {
    return (
        <div className={styles.empty}>
            <h1>Your wishlist is empty <BsEmojiSmileUpsideDown className={styles.emoji} /></h1>
        </div>
    )
}

export default NoResults
