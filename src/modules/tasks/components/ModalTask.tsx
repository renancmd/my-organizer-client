import styles from "../styles/ModalTask.module.scss";
import Datepicker from "../components/Datepicker";
import { IoIosClose } from "react-icons/io";
import Button from "@/components/ui/Button";

function ModalTask({ title, description, date, onclick }: ModalTaskProps) {
  return (
    <div className={styles.modalTaskOverlay}>
      <div className={styles.modalTask}>
        <button className={styles.modalClose} onClick={onclick}>
          <IoIosClose className={styles.iconClose} />
        </button>
        <input type="text" defaultValue={title} className={styles.modalTitle} />
        <h3 className={styles.modalSubtitle}>Descrição</h3>
        <textarea
          defaultValue={description}
          placeholder="Adicione uma descrição aqui"
          rows={18}
          className={styles.modalDescription}
        ></textarea>
        <div className={styles.modalButton}>
          <Button name="Salvar" />
        </div>
        <Datepicker date={date} />
      </div>
    </div>
  );
}

export default ModalTask;
