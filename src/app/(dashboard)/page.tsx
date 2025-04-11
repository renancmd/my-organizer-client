"use client";
import "@/styles/globals.scss";
import styles from "@/styles/pages/Home.module.scss";
import ContainerToDo from "@/modules/tasks/components/ContainerToDo";
import TabButton from "@/modules/tasks/components/TabButton";
import Task from "@/modules/tasks/components/Task";
import Input from "@/components/ui/Input";
import { useState } from "react";
import ModalTask from "@/modules/tasks/components/ModalTask";

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);

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
        <Input
          type="text"
          showLabel={false}
          placeholder="Adicione uma tarefa"
        />
        <Task
          title="Hello, world!"
          date="11-08-2004"
          onclick={() => setOpenModal(true)}
        />
        {openModal && (
          <ModalTask
            title="Hello, world"
            description="I just writing something to put in the description. cuz If the world was ending I wanna be next to you"
            date="11-08-2004"
            onclick={() => setOpenModal(false)}
          />
        )}
      </ContainerToDo>
    </div>
  );
}
