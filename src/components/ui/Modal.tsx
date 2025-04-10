import { IoIosClose } from "react-icons/io";
import styles from "../../styles/ui/Modal.module.scss";
import Button from "./Button";

export const Modal = ({
  isOpen,
  onClose,
  question,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          <IoIosClose size={24} />
        </button>

        <div className={styles.content}>
          <p className={styles.question}>{question}</p>
        </div>

        <div className={styles.actions}>
          <button onClick={onCancel} className={styles.cancelButton}>
            {cancelText}
          </button>
          <button onClick={onConfirm} className={styles.confirmButton}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};