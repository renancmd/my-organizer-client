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
import { filterTasks } from "@/functions/tasks/filter-task";
import { deleteTask } from "@/functions/tasks/delete-task";

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");
  const [task, setTask] = useState<Array<Object>>([]);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const loadTasks = async () => {
    const data = await getTasks();
    if (Array.isArray(data)) {
      setTask(data);
    } else {
      console.error("Invalid data format:", data);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <ContainerToDo>
        <div className={`center flex ${styles.containerTab}`}>
          <TabButton title="Todos" onclick={() => setFilter("all")} />
          <TabButton title="Sem data" onclick={() => setFilter("no-date")} />
          <TabButton title="Hoje" onclick={() => setFilter("today")} />
          <TabButton title="Amanhã" onclick={() => setFilter("tomorrow")} />
          <TabButton title="Atrasado" onclick={() => setFilter("overdue")} />
          <TabButton title="Completo" onclick={() => setFilter("completed")} />
        </div>
        <div className={styles.containerInput}>
          <Input
            type="text"
            showLabel={false}
            placeholder="Adicione uma tarefa"
            value={taskName}
            onchange={(e) => setTaskName(e.target.value)}
          />
          <Button
            name="Criar"
            onclick={async () => {
              if (taskName.trim() !== "") {
                await createTask(taskName);
                setTaskName("");
                await loadTasks();
              }
            }}
          />
        </div>
        {filterTasks(task, filter).map((task: any) => (
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
            ondelete={async (e) => {
              e.stopPropagation();
              await deleteTask(task.id);
              await loadTasks();
            }}
          />
        ))}
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
