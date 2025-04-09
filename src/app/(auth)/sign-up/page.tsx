import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import TextLink from "@/components/ui/TextLink";
import Button from "@/components/ui/Button";
import styles from "@/styles/pages/SignUp.module.scss";
import Logo from "@/components/ui/Logo";

function signUp() {
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
          />
          <Input
            placeholder="exemplo@gmail.com"
            showLabel={true}
            label="E-mail"
            type="text"
          />
          <Input
            placeholder="Sua senha..."
            showLabel={true}
            label="Crie uma senha"
            type="password"
          />
          <Input
            placeholder="Confirme sua senha..."
            showLabel={true}
            label="Confirme sua senha"
            type="password"
          />
          <TextLink name="Já possui uma conta?" href="/sign-in" />
          <div className="center">
            <Button name="Cadastrar" />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default signUp;