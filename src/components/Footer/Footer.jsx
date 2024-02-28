import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>© 2023 Climate Change Event. All rights reserved.</p>
            </div>
        </footer>
    );
};

export { Footer };