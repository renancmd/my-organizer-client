import { FaCheck } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "../styles/Task.module.scss";

function Task ({title, description, date, onclick} : TaskProps) {
    return (
        <div className={styles.task} onClick={onclick}>
            <div className={styles.taskContent}>
                <h3 className={styles.taskTitle}>{title}</h3>
                <span className={styles.taskDate}>{date}</span>
            </div>
            <div className={styles.taskActions}>
                <button className={`${styles.taskIcon} ${styles.check}`}>
                    <FaCheck />
                </button>
                <button className={`${styles.taskIcon} ${styles.delete}`}>
                    <FaRegTrashAlt />
                </button>
            </div>
        </div>
    )
}

export default Task;
