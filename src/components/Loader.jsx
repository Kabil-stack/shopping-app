import styles from './Loader.module.css'

function Loader() {
    return (
        <div className={styles.outer}>
            <div className={styles.loader}>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
    )
}

export default Loader
