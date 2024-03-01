'use client'
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import styles from "./Admin.module.css"; // Import the CSS module
import { useAppContext } from "@/hooks/useAppContext";
import { useEffect } from "react";

const Admin = () => {
    const { registro, loadingCarregar } = useAppContext();
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
                            <h1 className={styles.title}>Admin Dashboard</h1>
                            <div className={styles.cardTitle}>Registro de Usuários:</div>

                            <div className={styles.cardTitle}>Artigos Submetidos:</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Admin;
