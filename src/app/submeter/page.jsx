'use client'

import { useState } from "react";
import { useAppContext } from "@/hooks/useAppContext";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import styles from "./Submeter.module.css";

const Submeter = () => {
    const { adicionarRegistro, loadingCriar } = useAppContext();
    const [title, setTitle] = useState();
    const [abstract, setAbstract] = useState();
    const [file, setFile] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("abstract", abstract);
        formData.append("file", file);

        try {
            await axios.post("/api/submission", formData);
            router.push("/");
        } catch (error) {
            console.error("Error during submission", error);
        }
    };
    return (
        <div>
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
                    <h1 className={styles.title}>Submeter Artigo</h1>
                    <form
                        // onSubmit={handleSubmit}
                        className={styles.formContainer}
                    >
                        <div className={styles.input}>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className={styles.inputField}
                                placeholder="Title"
                                required
                            // value={title}
                            // onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className={styles.input}>
                            <textarea
                                name="abstract"
                                id="abstract"
                                placeholder="Resumo do Artigo"
                                rows="2"
                                required
                                className={styles.textArea}
                            // value={abstract}
                            // onChange={(e) => setAbstract(e.target.value)}
                            ></textarea>
                        </div>
                        <div className={styles.input}>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                required
                                className={styles.fileInput}
                            // onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                        <button type="submit" className={styles.button}>
                            {loadingCriar ? 'Submetendo...' : 'Submeter'}
                        </button>
                    </form>
                    {loadingCriar && (
                        <div className={styles.feedbackContainer}>
                            <p className={styles.feedbackText}>
                                Artigo Submetido!
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Submeter;