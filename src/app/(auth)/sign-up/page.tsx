"use client";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import TextLink from "@/components/ui/TextLink";
import Button from "@/components/ui/Button";
import styles from "@/styles/pages/SignUp.module.scss";
import Logo from "@/components/ui/Logo";
import { useState } from "react";
import { register } from "@/functions/users/register/register";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [erros, setErros] = useState({
    email: true,
    name: true,
    password: true,
    confirmPassword: true
  });

  return (
    <div className={styles.signUp}>
      <Logo />
      <div className={`${styles.formSignup} center`}>
        <Form>
          <h2 className="center">Cadastre-se</h2>
          <Input
            placeholder="Seu nome..."
            showLabel={true}
            label="Nome"
            type="text"
            value={name}
            onchange={(e) => setName(e.target.value)}
            error={!erros.name}
            errorMessage="Nome Inválido" 
          />
          <Input
            placeholder="exemplo@gmail.com"
            showLabel={true}
            label="E-mail"
            type="text"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
            error={!erros.email}
            errorMessage="Email Inválido"
          />
          <Input
            placeholder="Sua senha..."
            showLabel={true}
            label="Crie uma senha"
            type="password"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
            error={!erros.password}
            errorMessage="Senha Inválida (mínimo 8 caracteres, pelo menos uma letra e um número)"
          />
          <Input
            placeholder="Confirme sua senha..."
            showLabel={true}
            label="Confirme sua senha"
            type="password"
            value={confirmPassword}
            onchange={e => setConfirmPassword(e.target.value)}
            error={!erros.confirmPassword}
            errorMessage="A senha não está igual à senha anterior"
          />
          <TextLink name="Já possui uma conta?" href="/sign-in" />
          <div className="center">
            <Button
              name="Cadastrar"
              onclick={() => {
                const result = register(email, name, password, confirmPassword);
                if (result) {
                  setErros(result);
                }
              }}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
