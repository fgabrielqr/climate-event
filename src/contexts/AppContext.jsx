'use client'
import { api } from "@/services/api";
import { createContext, useEffect, useState } from "react";


export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;
    const [registros, setRegistros] = useState([]);
    const [loadingCriar, setLoadingCriar] = useState(false);
    const [loadingEditar, setLoadingEditar] = useState(null);
    const [loadingRemover, setLoadingRemover] = useState(null);
    const [loadingCarregar, setLoadingCarregar] = useState(false);

    const carregarRegistro = async () => {
        // setLoadingCarregar(true);
        const { data = [] } = await api.get('/registros');
        setRegistros([
            ...data,
        ])
        setTimeout(() => {
            // Após o atraso, você pode realizar sua lógica de criação aqui

            // Por exemplo, redefinir o estado do loading
            // setLoadingCarregar(false);
        }, 1000);
        console.log({ data })
    }

    const adicionarRegistro = async (nomeRegistro, emailRegistro, afiliacaoRegistro) => {
        // setLoadingCriar(true);

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
            // Após o atraso, você pode realizar sua lógica de criação aqui

            // Por exemplo, redefinir o estado do loading
            // setLoadingCriar(false);
        }, 1000);
    }


    useEffect(() => {
        carregarRegistro();
    }, [])

    return (
        <AppContext.Provider value={{
            registros,
            adicionarRegistro,
            loadingCarregar,
            loadingCriar,
            loadingEditar,
            loadingRemover
        }}>
            {children}
        </AppContext.Provider>
    )
}