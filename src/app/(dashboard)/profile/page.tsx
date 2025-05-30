"use client";
import AuthGuard from "@/components/layout/AuthGuard";
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

  const [errors, setErrors] = useState({
    email: true,
    name: true,
  });

  useEffect(() => {
    showUserData().then((data) => {
      setEmail(data.email);
      setName(data.name);
    });
  }, []);

  const router = useRouter();

  return (
    <AuthGuard>
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
              error={!errors.email}
              errorMessage="Email Inválido"
            />
            <Input
              type="text"
              showLabel={true}
              label="Nome"
              placeholder="Nome"
              value={name}
              onchange={(e) => setName(e.target.value)}
              disable={editUserData}
              error={!errors.name}
              errorMessage="Nome Inválido"
            />
            {editUserData ? (
              <Button
                name="Editar"
                onclick={() => {
                  setEditUserData(false);
                }}
              />
            ) : (
              <Button
                name="Salvar"
                onclick={() => {
                  const result = updateUserData(email, name);
                  if (result) {
                    setErrors(result);
                  }
                }}
              />
            )}
            <Button
              name="Alterar senha"
              onclick={() => router.push("/change-password")}
            />
            <Button name="Sair" onclick={() => logout()} />
            <Button
              name="Excluir minha conta"
              onclick={() => {
                setIsModalOpen("remove-account");
              }}
            />
            <Modal
              onClose={() => setIsModalOpen("")}
              question="Tem certeza que deseja excluir sua conta? Confirme sua senha para realizar a exclusão."
              isOpen={isModalOpen === "remove-account"}
              cancelText="Cancelar"
              confirmText="Excluir"
              onCancel={() => setIsModalOpen("")}
            />
          </Form>
        </div>
      </div>
    </AuthGuard>
  );
}

export default Profile;
