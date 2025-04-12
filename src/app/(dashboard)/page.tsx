"use client";
import "@/styles/globals.scss";
import styles from "@/styles/pages/Home.module.scss";
import ContainerToDo from "@/modules/tasks/components/ContainerToDo";
import TabButton from "@/modules/tasks/components/TabButton";
import Task from "@/modules/tasks/components/Task";
import Input from "@/components/ui/Input";
import { useEffect, useState } from "react";
import ModalTask from "@/modules/tasks/components/ModalTask";
import Button from "@/components/ui/Button";
import { createTask } from "@/functions/tasks/create-task";
import { getTasks } from "@/functions/tasks/get-task";

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");
  const [task, setTask] = useState<Array<Object>>([]);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  useEffect(() => {
    getTasks().then((data) => {
      if (Array.isArray(data)) {
        setTask(data);
      } else {
        console.error("Invalid data format:", data);
      }
    });
  }, []);

  return (
    <div>
      <ContainerToDo>
        <div className={`center flex ${styles.containerTab}`}>
          <TabButton title="Sem data" />
          <TabButton title="Hoje" />
          <TabButton title="Amanhã" />
          <TabButton title="Atrasado" />
          <TabButton title="Completo" />
        </div>
        <div className={styles.containerInput}>
        <Input
          type="text"
          showLabel={false}
          placeholder="Adicione uma tarefa"
          value={taskName}
          onchange={(e) => setTaskName(e.target.value)}
        />
        <Button name="Criar" onclick={() => {
          createTask(taskName)
          setTaskName("");
        }} />
        </div>
        {
          task.map((task: any) => (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              description={task.description}
              date={task.date}
              done={task.done}
              onclick={() => {
                setSelectedTask(task);
                setOpenModal(true);
              }}
            />
          ))
        }
        {openModal && selectedTask && (
          <ModalTask
            id={selectedTask.id}
            title={selectedTask.name}
            description={selectedTask.description}
            date={selectedTask.date}
            onclick={() => {
              setOpenModal(false);
              setSelectedTask(null);
            }}
          />
        )}
      </ContainerToDo>
    </div>
  );
}
