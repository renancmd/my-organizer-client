import styles from "../styles/TabButton.module.scss";
import { TabButtonProps } from "../types/task";

function TabButton({title, onclick}: TabButtonProps) {
    return (
        <button className={styles.tabButton} onClick={onclick} >
            <span className={styles.tabTitle}>{title}</span>
            <span className={styles.tabUnderline} />
        </button>
    )
} 

export default TabButton