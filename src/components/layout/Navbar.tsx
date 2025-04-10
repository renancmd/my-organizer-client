import TextLink from "../ui/TextLink";
import DropdownTheme from "../ui/DropdownTheme";
import styles from "@/styles/layout/Navbar.module.scss";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>My Organizer</div>
            <ul className={styles.navbarLinks}>
                <li>
                    <DropdownTheme />
                </li>
                <li>
                    <TextLink name="Olá" href="/profile" />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;