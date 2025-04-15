import { FaCheck } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "../styles/Task.module.scss";
import { TaskProps } from "../types/task";

function Task ({ name, date, onclick, oncomplete, ondelete} : TaskProps) {
    return (
        <div className={styles.task} onClick={onclick}>
            <div className={styles.taskContent}>
                <h3 className={styles.taskTitle}>{name}</h3>
                <span className={styles.taskDate}>{date}</span>
            </div>
            <div className={styles.taskActions}>
                <button className={`${styles.taskIcon} ${styles.check}`} onClick={oncomplete}  >
                    <FaCheck />
                </button>
                <button className={`${styles.taskIcon} ${styles.delete}`} onClick={ondelete} >
                    <FaRegTrashAlt />
                </button>
            </div>
        </div>
    )
}

export default Task;
