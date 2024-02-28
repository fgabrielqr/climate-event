import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Climate Change Event
                </Link>
                <nav className={styles.nav}>
                    <Link href="/about" className={styles.link}>
                        Sobre
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export { Header };