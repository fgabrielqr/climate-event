'use client'
import { api } from "@/services/api";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;
    const [registros, setRegistros] = useState([]);
    const [submeter, setSubmeter] = useState([]);
    const [loadingCriar, setLoadingCriar] = useState(false);
    const [loadingCarregar, setLoadingCarregar] = useState(false);
    const [numeroDePessoasCadastradas, setNumeroDePessoasCadastradas] = useState(0);
    const [numeroDeArtigos, setNumeroDeArtigos] = useState(0);

    const carregarRegistro = async () => {
        setLoadingCarregar(true);
        try {
            const response = await api.get('/registros');
            const data = response.data || [];

            // Conta o número de registros
            const numeroDePessoasCadastradas = data.length;
            const numeroDeArtigos = data.length;

            // Atualiza o estado dos registros
            setRegistros([...data]);

            // Atualiza o estado do número de pessoas cadastradas
            setNumeroDePessoasCadastradas(numeroDePessoasCadastradas);

            setTimeout(() => {
                setLoadingCarregar(false);
            }, 1000);
        } catch (error) {
            console.error('Erro ao carregar registros:', error);
            setLoadingCarregar(false);
        }
    };

    const carregarArtigos = async () => {
        setLoadingCarregar(true);
        try {
            const response = await api.get('/submeter');
            const data = response.data || [];

            // Conta o número de registros
            const numeroDeArtigos = data.length;

            // Atualiza o estado dos registros
            setSubmeter([...data]);

            // Atualiza o estado do número de pessoas cadastradas
            setNumeroDeArtigos(numeroDeArtigos);

            setTimeout(() => {
                setLoadingCarregar(false);
            }, 1000);
        } catch (error) {
            console.error('Erro ao carregar registros:', error);
            setLoadingCarregar(false);
        }
    };

    const adicionarRegistro = async (nomeRegistro, emailRegistro, afiliacaoRegistro) => {
        setLoadingCriar(true);
        const { data: registro } = await api.post('/registros', {
            nome: nomeRegistro,
            email: emailRegistro,
            afiliacao: afiliacaoRegistro,
        })
        setRegistros(estadoAtual => {
            return [
                ...estadoAtual,
                registro,
            ]
        });
        setTimeout(() => {
            setLoadingCriar(false);
        }, 2000);
    }

    const adicionarArtigo = async (tituloArtigo, resumoArtigo, arquivo) => {
        setLoadingCriar(true);

        // Use FormData para permitir o envio de arquivos
        const formData = new FormData();
        formData.append('tituloArtigo', tituloArtigo);
        formData.append('resumoArtigo', resumoArtigo);

        // Se houver um arquivo, adicione-o ao FormData
        if (arquivo) {
            formData.append('arquivo', arquivo);
        }

        try {
            const { data: registro } = await api.post('/registros', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setRegistros(estadoAtual => {
                return [
                    ...estadoAtual,
                    registro,
                ];
            });

            setTimeout(() => {
                setLoadingCriar(false);
            }, 1000);
        } catch (error) {
            console.error('Erro ao adicionar registro:', error);
            setLoadingCriar(false);
        }
    };

    useEffect(() => {
        carregarRegistro();
        carregarArtigos();
    }, [])

    return (
        <AppContext.Provider value={{
            numeroDeArtigos,
            numeroDePessoasCadastradas,
            adicionarRegistro,
            adicionarArtigo,
            loadingCarregar,
            loadingCriar,
        }}>
            {children}
        </AppContext.Provider>
    )
}