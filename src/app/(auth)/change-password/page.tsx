import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";
import TextLink from "@/components/ui/TextLink";
import styles from "@/styles/pages/ChangePassword.module.scss";

function ChangePassword() {
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
              />
              <Input
                placeholder="Crie uma nova senha"
                showLabel={true}
                label="Nova senha"
                type="password"
              />
              <Input
                placeholder="Confime a nova senha"
                showLabel={true}
                label="Repita a nova senha"
                type="password"
              />
              <div className="center">
                <Button name="Salvar" />
              </div>
            </Form>
          </div>
        </div>
      );
}

export default ChangePassword;