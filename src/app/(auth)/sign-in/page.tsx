"use client";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import TextLink from "@/components/ui/TextLink";
import Button from "@/components/ui/Button";
import styles from "@/styles/pages/SignIn.module.scss";
import Logo from "@/components/ui/Logo";
import { useState } from "react";
import { login } from "@/functions/users/login/login";

function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<boolean>(true);

  return (
    <div className={styles.signIn}>
      <Logo />
      <div className={`${styles.formSignin} center`}>
        <Form>
          <h2 className="center">Login</h2>
          <Input
            placeholder="exemplo@gmail.com"
            showLabel={true}
            label="E-mail"
            type="text"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
            error={!error}
            errorMessage="Email ou senha incorretos"
          />
          <Input
            placeholder="Sua senha..."
            showLabel={true}
            label="Senha"
            type="password"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
            error={!error}
            errorMessage="Email ou senha incorretos"
          />
          <TextLink name="Ainda não possui uma conta?" href="/sign-up" />
          <div className="center">
            <Button name="Login" onclick={() => {
              const result: boolean | any = login(email, password);
              !result && setError(false);
            }} />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default signIn;