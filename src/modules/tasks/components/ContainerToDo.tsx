import styles from "../styles/ContainerToDo.module.scss";
import { ContainerToDoProps } from "../types/task";

function ContainerToDo({ children }: ContainerToDoProps) {
    return (
        <div className={styles.containerTodo}>
            {children}
        </div>
    )
} 

export default ContainerToDo;