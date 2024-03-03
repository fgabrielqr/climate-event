import Link from "next/link";
import styles from "./Inicial.module.css";

const Inicial = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    src="https://source.unsplash.com/random/800x800?climate+change,future"
                    alt="Climate Change & Future"
                    className={styles.image}
                />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.title}>
                        Evento Científico sobre Mudanças Climáticas
                    </h1>
                    <p className={styles.description}>
                        Junte-se a nós em um evento esclarecedor sobre as últimas descobertas na pesquisa sobre mudanças climáticas.
                    </p>
                    <div className={styles.buttonContainer}>
                        <Link href="/registro" className={`${styles.link} ${styles.blue}`}>
                            Inscreva-Se
                        </Link>
                        <Link href="/submeter" className={`${styles.link} ${styles.gray}`}>
                            Submeter Artigo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Inicial };