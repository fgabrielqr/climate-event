'use client'

import React, { useState } from 'react';
import { useAppContext } from '@/hooks/useAppContext';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

import styles from './Registro.module.css';

const Registro = () => {
    const { adicionarRegistro, loadingCriar } = useAppContext();
    const [nomeRegistro, setNomeRegistro] = useState();
    const [emailRegistro, setEmailRegistro] = useState();
    const [afiliacaoRegistro, setAfiliacaoRegistro] = useState();

    const onChangeRegistro = (event) => {
        const { name, value } = event.currentTarget;

        // Name para determinar qual estado atualizar
        if (name === 'nome') {
            setNomeRegistro(value);
        } else if (name === 'email') {
            setEmailRegistro(value);
        } else if (name === 'afiliacao') {
            setAfiliacaoRegistro(value);
        }
    };

    const submeterForm = (event) => {
        event.preventDefault();

        if (!nomeRegistro && !emailRegistro && !afiliacaoRegistro) {
            return;
        }
        // Lógica para chamar a função adicionarRegistro com os dados do formulário
        adicionarRegistro(nomeRegistro, emailRegistro, afiliacaoRegistro);

        // Limpar os campos do formulário após o cadastro
        setNomeRegistro('');
        setEmailRegistro('');
        setAfiliacaoRegistro('');
    }

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
                        onSubmit={submeterForm}
                        className={styles.formContainer}
                    >
                        <input
                            type="text"
                            name='nome'
                            className={styles.inputField}
                            placeholder="Nome"
                            value={nomeRegistro}
                            onChange={onChangeRegistro}
                            required
                        />
                        <input
                            type="email"
                            name='email'
                            className={styles.inputField}
                            placeholder="E-mail"
                            value={emailRegistro}
                            onChange={onChangeRegistro}
                            required
                        />
                        <input
                            type="text"
                            name='afiliacao'
                            className={styles.inputField}
                            placeholder="Afiliação"
                            value={afiliacaoRegistro}
                            onChange={onChangeRegistro}
                            required
                        />
                        <button
                            type="submit"
                            className={styles.button}
                        >
                            {loadingCriar ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                    </form>
                    {loadingCriar && (
                        <div className={styles.feedbackContainer}>
                            <p className={styles.feedbackText}>
                                Excelente seu cadastrado foi efetuado!
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Registro;