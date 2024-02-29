import Link from "next/link";
import styles from "./Header.module.css";



const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.link}>
                    SisIEC
                </Link>
                <nav className={styles.nav}>
                    <Link href="/administrativo" className={styles.adm}>
                        Dashboard
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export { Header };