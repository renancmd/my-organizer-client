import styles from "@/styles/ui/Button.module.scss";
import { ButtonProps } from "@/types/globals";

function Button({ name, onclick }: ButtonProps) {
    return (
        <button className={styles.custom_button} onClick={onclick}>
            {name}
        </button>
    );
}

export default Button;