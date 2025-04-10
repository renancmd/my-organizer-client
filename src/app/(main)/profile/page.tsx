"use client";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import ProfileImage from "@/components/ui/ProfileImage";
import TextLink from "@/components/ui/TextLink";
import styles from "@/styles/pages/Profile.module.scss";
import { useState } from "react";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState<string>("");
  const [editUserData, setEditUserData] = useState<boolean>(true);

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
          />
          <Input
            type="text"
            showLabel={true}
            label="Nome"
            placeholder="Nome"
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
              }}
            />
          )}
          <Button name="Alterar senha" />
          <Button name="Sair" />
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
