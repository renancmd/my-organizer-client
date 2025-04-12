import { FaCheck } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "../styles/Task.module.scss";

function Task ({name, description, date, onclick, done} : TaskProps) {
    return (
        <div className={done == false ? styles.task : styles.hi} onClick={onclick}>
            <div className={styles.taskContent}>
                <h3 className={styles.taskTitle}>{name}</h3>
                <span className={styles.taskDate}>{date}</span>
            </div>
            <div className={styles.taskActions}>
                <button className={`${styles.taskIcon} ${styles.check}`} >
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
