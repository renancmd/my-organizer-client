"use client";
import TextLink from "../ui/TextLink";
import DropdownTheme from "../ui/DropdownTheme";
import styles from "@/styles/layout/Navbar.module.scss";
import { useEffect, useState } from "react";
import { showUserData } from "@/functions/users/show-data/show-data";

function Navbar() {
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        showUserData().then((data) => {
            setName(data.name);
        });
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>My Organizer</div>
            <ul className={styles.navbarLinks}>
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