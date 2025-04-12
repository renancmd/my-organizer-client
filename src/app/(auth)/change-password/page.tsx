"use client";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";
import TextLink from "@/components/ui/TextLink";
import { changePassword } from "@/functions/users/password/password";
import styles from "@/styles/pages/ChangePassword.module.scss";
import { useState } from "react";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

    return (
        <div className={styles.signIn}>
          <Logo />
          <div className={`${styles.formSignin} center`}>
            <Form>
            <TextLink name="Voltar" href="/" />
              <h2 className="center">Altere sua senha</h2>
              <Input
                placeholder="Digite sua senha atual"
                showLabel={true}
                label="Senha atual"
                type="password"
                value={oldPassword}
                onchange={(e) => setOldPassword(e.target.value)}
              />
              <Input
                placeholder="Crie uma nova senha"
                showLabel={true}
                label="Nova senha"
                type="password"
                value={newPassword}
                onchange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                placeholder="Confime a nova senha"
                showLabel={true}
                label="Repita a nova senha"
                type="password"
              />
              <div className="center">
                <Button name="Salvar" onclick={() => changePassword(oldPassword, newPassword)} />
              </div>
            </Form>
          </div>
        </div>
      );
}

export default ChangePassword;