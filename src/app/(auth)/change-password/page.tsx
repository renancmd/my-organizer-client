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
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

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
                error={error}
                errorMessage={errorMessage}
              />
              <Input
                placeholder="Crie uma nova senha"
                showLabel={true}
                label="Nova senha"
                type="password"
                value={newPassword}
                onchange={(e) => setNewPassword(e.target.value)}
                error={error}
                errorMessage={errorMessage}
              />
              <Input
                placeholder="Confime a nova senha"
                showLabel={true}
                label="Repita a nova senha"
                type="password"
                value={confirmPassword}
                onchange={(e) => setConfirmPassword(e.target.value)}
                error={error}
                errorMessage={errorMessage}
              />
              <div className="center">
                <Button name="Salvar" onclick={() => {
                  const result = changePassword(oldPassword, newPassword, confirmPassword);
                  if (result?.error) {
                    setError(result.error);
                    setErrorMessage(result.errorMessage);
                  }
                }} />
              </div>
            </Form>
          </div>
        </div>
      );
}

export default ChangePassword;