import styles from "@/styles/ui/TextLink.module.scss";
import { TextLinkProps } from "@/types/globals";
import Link from "next/link";

function TextLink({ name, href }: TextLinkProps) {
    return (
      <Link className={styles.textLink} href={href}>
        {name}
      </Link>
    );
  }

export default TextLink;