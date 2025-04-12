"use client";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import ProfileImage from "@/components/ui/ProfileImage";
import TextLink from "@/components/ui/TextLink";
import { logout } from "@/functions/users/logout/logout";
import { showUserData } from "@/functions/users/show-data/show-data";
import { updateUserData } from "@/functions/users/update-data/update-data";
import styles from "@/styles/pages/Profile.module.scss";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState<string>("");
  const [editUserData, setEditUserData] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    showUserData().then(data => {
      setEmail(data.email);
      setName(data.name);
    })
  }, []);

  const router = useRouter();

  return (
    <div>
      <div className="container-back">
        <TextLink name="Voltar" href="/" />
      </div>
      <div className={`center ${styles.form}`}>
        <Form>
          <div className={`center ${styles.h1}`}>
            <h1>Minha conta</h1>
          </div>
          <div className="center">
            <ProfileImage />
          </div>
          <Input
            type="text"
            showLabel={true}
            label="Email"
            placeholder="Email"
            disable={editUserData}
            value={email}
            onchange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            showLabel={true}
            label="Nome"
            placeholder="Nome"
            value={name}
            onchange={(e) => setName(e.target.value)}
            disable={editUserData}
          />
          {editUserData ? (
            <Button
              name="Editar"
              onclick={(e) => {
                setEditUserData(false);
              }}
            />
          ) : (
            <Button
              name="Salvar"
              onclick={(e) => {
                setEditUserData(true);
                updateUserData(email, name);
              }}
            />
          )}
          <Button name="Alterar senha" onclick={() => router.push("/change-password")} />
          <Button name="Sair" onclick={() => logout()} />
          <Button
            name="Excluir minha conta"
            onclick={(e) => {
              setIsModalOpen("remove-account");
            }}
          />
          <Modal
            onClose={() => setIsModalOpen("")}
            question="Tem certeza que deseja excluir sua conta?"
            isOpen={isModalOpen === "remove-account"}
            cancelText="Cancelar"
            confirmText="Excluir"
            onCancel={() => setIsModalOpen("")}
            onConfirm={() => setIsModalOpen("")}
          />
        </Form>
      </div>
    </div>
  );
}

export default Profile;
