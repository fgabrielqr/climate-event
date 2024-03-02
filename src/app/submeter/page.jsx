'use client'

import { useState } from "react";
import { useAppContext } from "@/hooks/useAppContext";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import styles from "./Submeter.module.css";

const Submeter = () => {
    const { adicionarArtigo, loadingCriar } = useAppContext();
    const [tituloArtigo, setTituloArtigo] = useState();
    const [resumoArtigo, setResumoArtigo] = useState();
    const [arquivo, setArquivo] = useState();

    const onChangeSubmeter = (event) => {
        const { name, value } = event.currentTarget;

        // Name para determinar qual estado atualizar
        if (name === 'titulo') {
            setTituloArtigo(value);
        } else if (name === 'resumo') {
            setResumoArtigo(value);
        } else if (name === 'arquivo') {
            setArquivo(value);
        }
    };

    const submeterForm = (event) => {
        event.preventDefault();

        if (!tituloArtigo && !resumoArtigo && !arquivo) {
            return;
        }
        // Lógica para chamar a função adicionarRegistro com os dados do formulário
        adicionarArtigo(tituloArtigo, resumoArtigo, arquivo);

        // Limpar os campos do formulário após o cadastro
        setTituloArtigo('');
        setResumoArtigo('');
        setArquivo('');
    }

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
                        onSubmit={submeterForm}
                        className={styles.formContainer}
                    >
                        <div className={styles.input}>
                            <input
                                type="text"
                                name="titulo"
                                id="titulo"
                                className={styles.inputField}
                                placeholder="Titulo"
                                required
                                value={tituloArtigo}
                                onChange={onChangeSubmeter}
                            />
                        </div>
                        <div className={styles.input}>
                            <textarea
                                name="resumo"
                                id="resumo"
                                placeholder="Resumo do Artigo"
                                rows="2"
                                required
                                className={styles.textArea}
                                value={resumoArtigo}
                                onChange={onChangeSubmeter}
                            ></textarea>
                        </div>
                        <div className={styles.input}>
                            <input
                                type="file"
                                name="arquivo"
                                id="arquivo"
                                required
                                className={styles.fileInput}
                                onChange={onChangeSubmeter}
                            />
                        </div>
                        <button type="submit" className={styles.button}>
                            {loadingCriar ? 'Submetendo...' : 'Submeter'}
                        </button>
                    </form>
                    {loadingCriar && (
                        <div className={styles.feedbackContainer}>
                            <p className={styles.feedbackText}>
                                Parabéns seu artigo foi submetido!
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