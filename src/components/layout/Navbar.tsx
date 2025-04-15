"use client";
import TextLink from "../ui/TextLink";
import DropdownTheme from "../ui/DropdownTheme";
import styles from "@/styles/layout/Navbar.module.scss";
import { useEffect, useState } from "react";
import { showUserData } from "@/functions/users/show-data/show-data";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
    const [name, setName] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        showUserData().then((data) => {
            setName(data.name);
        });
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>My Organizer</div>
            <button
                className={styles.menuButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
            <ul className={`${styles.navbarLinks} ${isOpen ? styles.isOpen : ""}`}>
                <li>
                    <DropdownTheme />
                </li>
                <li>
                    <TextLink name={`Olá, ${name}`} href="/profile" />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;