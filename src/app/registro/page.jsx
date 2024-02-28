// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import React from 'react';
import styles from './Registro.module.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const Registro = () => {
    // const router = useRouter();
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [affiliation, setAffiliation] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         await axios.post("/api/register", { name, email, affiliation });
    //         router.push("/");
    //     } catch (error) {
    //         console.error("Error during registration", error);
    //     }
    // };

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
                </div>
                <div className={styles.containerForm}>
                    <h1 className={styles.title}>Inscreva-Se</h1>
                    <form
                        // onSubmit={handleSubmit}
                        className={styles.formContainer}
                    >
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.inputField}
                            placeholder="Nome"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.inputField}
                            placeholder="E-mail"
                            required
                        />
                        <input
                            type="text"
                            name="affiliation"
                            id="affiliation"
                            className={styles.inputField}
                            placeholder="Afiliação"
                            required
                        />
                        <button
                            type="submit"
                            className={styles.button}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Registro;