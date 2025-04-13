"use client";
import styles from "../styles/ModalTask.module.scss";
import Datepicker from "../components/Datepicker";
import { IoIosClose } from "react-icons/io";
import Button from "@/components/ui/Button";
import { updateTask } from "@/functions/tasks/update-task";
import { useState } from "react";
import { getTasks } from "@/functions/tasks/get-task";

function ModalTask({ id, title, description, date, onclick }: ModalTaskProps) {
  const [taskName, setTaskName] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskDate, setTaskDate] = useState(date);

  return (
    <div className={styles.modalTaskOverlay}>
      <div className={styles.modalTask}>
        <button className={styles.modalClose} onClick={onclick}>
          <IoIosClose className={styles.iconClose} />
        </button>

        <input
          type="text"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          className={styles.modalTitle}
        />

        <h3 className={styles.modalSubtitle}>Descrição</h3>
        
        <textarea
          placeholder="Adicione uma descrição aqui"
          rows={18}
          className={styles.modalDescription}
          value={taskDescription}
          onChange={e => setTaskDescription(e.target.value)}
        ></textarea>

        <div className={styles.modalButton}>
          <Button
            name="Salvar"
            onclick={async () => {
              updateTask(id, {
                name: taskName,
                description: taskDescription,
                date: taskDate,
              });
              await getTasks();
              onclick?.();
            }}
          />
        </div>

        <Datepicker date={taskDate} onchange={e => setTaskDate(e.target.value)} />
      </div>
    </div>
  );
}

export default ModalTask;
