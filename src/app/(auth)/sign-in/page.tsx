"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import TextLink from "@/components/ui/TextLink";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import styles from "@/styles/pages/SignIn.module.scss";

import { login } from "@/functions/users/login/login";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const demoEmail = process.env.NEXT_PUBLIC_DEMO_EMAIL;
  const demoPassword = process.env.NEXT_PUBLIC_DEMO_PASSWORD;

  const handleLogin = async (emailToUse: string, passwordToUse: string) => {
    const result = await login(emailToUse, passwordToUse);
    if (!result) {
      setError(true);
    } else {
      setError(false);
      router.push("/"); // ou para a página logada
    }
  };

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
            error={error}
            errorMessage="Email ou senha incorretos"
          />

          <Input
            placeholder="Sua senha..."
            showLabel={true}
            label="Senha"
            type="password"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
            error={error}
            errorMessage="Email ou senha incorretos"
          />

          <TextLink name="Ainda não possui uma conta?" href="/sign-up" />

          <div className="center">
            <Button name="Login" onclick={() => handleLogin(email, password)} />
          </div>

          <Button
            name="Entrar sem login (DEMO)"
            onclick={() => {
              if (!demoEmail || !demoPassword) {
                console.error("Credenciais DEMO não definidas no .env");
                return;
              }
              handleLogin(demoEmail, demoPassword);
            }}
          />
        </Form>
      </div>
    </div>
  );
}