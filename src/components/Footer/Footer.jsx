import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>© 2024 Sistema de Inscrição para Evento Científico. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export { Footer };