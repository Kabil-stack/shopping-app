import styles from './Error.module.css'
import { PiWarningDuotone } from "react-icons/pi";

function Error() {
    return (
        <div className={styles.error}>
            <h1>Something went wrong <PiWarningDuotone className={styles.emoji}/></h1>
        </div>
    )
}

export default Error
