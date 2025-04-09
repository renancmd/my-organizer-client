import styles from "@/styles/ui/Form.module.scss";

function Form({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <form className={styles.form}>
            {children}
        </form>
    );
}

export default Form;
