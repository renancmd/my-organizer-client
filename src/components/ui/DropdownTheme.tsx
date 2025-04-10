"use client";
import styles from "@/styles/ui/DropdownTheme.module.scss";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function DropdownTheme() {
    const { theme, setTheme } = useTheme();
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);
    
    // Only show the theme UI after mounting to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);
    
    // Don't render anything until mounted to avoid hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <div className={styles.dropdownTheme}>
            <button
                className={styles.dropdownTrigger}
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
            >
                {theme === "dark" && <IoMoonOutline className={styles.icon} />}
                {theme === "light" && <IoSunnyOutline className={styles.icon} />}
                {theme === "system" && (
                    <div className={styles.icon}>
                        {window.matchMedia('(prefers-color-scheme: dark)').matches 
                            ? <IoMoonOutline /> 
                            : <IoSunnyOutline />}
                    </div>
                )}
            </button>

            <ul
                className={`${styles.dropdownMenu} ${showMenu ? styles.flex : styles.hidden}`}
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
            >
                <li
                    className={styles.dropdownItem}
                    onClick={() => {
                        setTheme("dark");
                    }}
                >
                    Dark
                </li>
                <li
                    className={styles.dropdownItem}
                    onClick={() => {
                        setTheme("light");
                    }}
                >
                    Light
                </li>
                <li
                    className={styles.dropdownItem}
                    onClick={() => {
                        setTheme("system");
                    }}
                >
                    System
                </li>
            </ul>
        </div>
    );
}

export default DropdownTheme;
