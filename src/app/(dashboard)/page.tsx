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
import { completeTask } from "@/functions/tasks/complete-task";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [task, setTask] = useState<Array<any>>([]);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [filter, setFilter] = useState("all");

  const loadTasks = async () => {
    const data = await getTasks();
    if (Array.isArray(data)) {
      setTask([...data]); // Força nova referência para atualizar corretamente
    } else {
      console.error("Invalid data format:", data);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreateTask = async () => {
    if (taskName.trim() === "") return;

    await createTask(taskName);
    setTaskName("");
    await loadTasks();
  };

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
            onPress={handleCreateTask}
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
            oncomplete={async (e) => {
              e.stopPropagation();
              await completeTask(task.id, true);
              await loadTasks();
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
            onclick={async () => {
              setOpenModal(false);
              setSelectedTask(null);
              await loadTasks();
            }}
          />
        )}
      </ContainerToDo>
    </div>
  );
}
