import styles from "../styles/TabButton.module.scss";

function TabButton({title}: TabButtonProps) {
    return (
        <button className={styles.tabButton}>
            <span className={styles.tabTitle}>{title}</span>
            <span className={styles.tabUnderline} />
        </button>
    )
} 

export default TabButton