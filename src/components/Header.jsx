import styles from './Header.module.css'
import { IoLogoFreebsdDevil } from "react-icons/io";
function Header() {
    return (
        <div className={styles.head}>
            
            <h1>Hell shopping</h1>
            <IoLogoFreebsdDevil className={styles.logo}/>
            
        </div>
    )
}

export default Header
