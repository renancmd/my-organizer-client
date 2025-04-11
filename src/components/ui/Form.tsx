"use client";
import styles from "@/styles/ui/Form.module.scss";

function Form({ children }: { children: React.ReactNode }): React.ReactNode {
    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            {children}
        </form>
    );
}

export default Form;
