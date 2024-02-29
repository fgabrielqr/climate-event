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

    const removerRegistro = async (idTarefa) => {
        setLoadingRemover(idTarefa);

        await api.delete(`tarefas/${idTarefa}`);
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id !== idTarefa);

            return [
                ...tarefasAtualizadas,
            ];
        });
        setTimeout(() => {
            // Após o atraso, você pode realizar sua lógica de criação aqui

            // Por exemplo, redefinir o estado do loading
            setLoadingRemover(null);
        }, 1000);

    };

    const editarRegistro = async (idTarefa, nomeRegistro) => {
        setLoadingEditar(idTarefa);

        const { data: tarefaAtualizada } = await api.put(`registros/${idTarefa}`, {
            nome: nomeRegistro,
        })
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => {
                return tarefa.id === idTarefa ? {
                    ...tarefa,
                    nome: tarefaAtualizada.nome,
                } : tarefa;
            });

            return [
                ...tarefasAtualizadas,
            ]
        })
        setTimeout(() => {
            // Após o atraso, você pode realizar sua lógica de criação aqui

            // Por exemplo, redefinir o estado do loading
            setLoadingEditar(null);
        }, 1000);

    }

    useEffect(() => {
        carregarRegistro();
    }, [])

    return (
        <AppContext.Provider value={{
            registros,
            adicionarRegistro,
            removerRegistro,
            editarRegistro,
            loadingCarregar,
            loadingCriar,
            loadingEditar,
            loadingRemover
        }}>
            {children}
        </AppContext.Provider>
    )
}