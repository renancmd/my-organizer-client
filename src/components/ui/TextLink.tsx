import styles from "@/styles/ui/TextLink.module.scss";
import { TextLinkProps } from "@/types/globals";

function TextLink({ name, href }: TextLinkProps) {
    return (
      <a className={styles.textLink} href={href}>
        {name}
      </a>
    );
  }

export default TextLink;