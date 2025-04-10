import styles from "../styles/ContainerToDo.module.scss";

function ContainerToDo({ children }: ContainerToDoProps) {
    return (
        <div className={styles.containerTodo}>
            {children}
        </div>
    )
} 

export default ContainerToDo;