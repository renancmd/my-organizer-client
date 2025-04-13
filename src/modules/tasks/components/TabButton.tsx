import styles from "../styles/TabButton.module.scss";

function TabButton({title, onclick}: TabButtonProps) {
    return (
        <button className={styles.tabButton} onClick={onclick} >
            <span className={styles.tabTitle}>{title}</span>
            <span className={styles.tabUnderline} />
        </button>
    )
} 

export default TabButton