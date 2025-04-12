import { InputProps } from "@/types/globals";
import styles from "@/styles/ui/Input.module.scss";

function Input({ placeholder, showLabel, className, type, label, onchange, disable, value, error, errorMessage }: InputProps) {
    return (
        <div className={`${styles.inputContainer} ${className ?? ""}`}>
            {showLabel && <label className={styles.inputLabel}>{label}</label>}
            <input
                className={`${styles.inputField} ${error ? styles.error : ""}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                disabled={disable}
            />
            {error && errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
            )}
        </div>
    );
}

export default Input;