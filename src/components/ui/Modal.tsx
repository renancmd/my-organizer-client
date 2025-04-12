import { IoIosClose } from "react-icons/io";
import styles from "../../styles/ui/Modal.module.scss";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { deleteUserData } from "@/functions/users/delete/delete";

export const Modal = ({
  isOpen,
  onClose,
  question,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onCancel,
}: ModalProps) => {
  if (!isOpen) return null;

  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          <IoIosClose size={24} />
        </button>

        <div className={styles.content}>
          <p className={styles.question}>{question}</p>
          <Input
            type="password"
            label="Senha"
            showLabel={false}
            placeholder="Senha"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.actions}>
          <button onClick={onCancel} className={styles.cancelButton}>
            {cancelText}
          </button>
          <button onClick={() => deleteUserData(password)} className={styles.confirmButton}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
