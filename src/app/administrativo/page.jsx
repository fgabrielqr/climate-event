'use client'

import { useAppContext } from "@/hooks/useAppContext";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import styles from "./Admin.module.css";

const Admin = () => {
    const { numeroDePessoasCadastradas } = useAppContext();

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img
                        src="https://source.unsplash.com/random/800x800?climate+change,future"
                        alt="Climate Change & Future"
                        className={styles.image}
                    />
                    <div className={styles.containerForm}>
                        <div className={styles.card}>
                            <h1 className={styles.title}>
                                Número de Inscritos e Artigos Submetidos
                            </h1>
                            <div className={styles.cardTitle}>
                                Pessoas Registradas:
                                {numeroDePessoasCadastradas}
                            </div>
                            <div className={styles.cardTitle}>
                                Artigos Submetidos:
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Admin;
