'use client'
import styles from "./Submeter.module.css"; // Import the CSS module
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { useState } from "react";

const Submeter = () => {
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
                    <form className={styles.formContainer}>
                        <div className={styles.input}>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className={styles.inputField}
                                placeholder="Title"
                                required
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
                            ></textarea>
                        </div>
                        <div className={styles.input}>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                required
                                className={styles.fileInput}
                            />
                        </div>
                        <button type="submit" className={styles.button}>
                            Submeter
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Submeter;