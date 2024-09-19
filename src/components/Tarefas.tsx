"use client";
import DialogAdicionarTarefa from './DialogAdicionarTarefa';
import style from '../styles/tarefas.module.scss';
import DialogExclusao from './DialogExclusao';
import Lixo from '../../public/lixo.svg';
import { useState } from 'react';
import Image from 'next/image';

interface ListaTarefas {
    id: number;
    nome: string;
    status: boolean;
}

export default function Tarefas() {
    const [tarefas, setTarefas] = useState<ListaTarefas[]>(
        [
            { id: 1, nome: 'Estudar React', status: false },
        ]
    );

    const [tarefaParaExcluir, setTarefaParaExcluir] = useState<number | null>(null);
    const [modalAdicionarAberto, setModalAdicionarAberto] = useState(false);
    const [dialogExclusaoAberto, setDialogExclusaoAberto] = useState(false);

    const abrirDialogExclusao = (id: number) => {
        setTarefaParaExcluir(id);
        setDialogExclusaoAberto(true);
    };

    const confirmarExclusao = () => {
        if (tarefaParaExcluir !== null) {
            setTarefas(tarefas.filter((item) => item.id !== tarefaParaExcluir));
            setTarefaParaExcluir(null);
        }
        setDialogExclusaoAberto(false);
    };

    const cancelarExclusao = () => {
        setTarefaParaExcluir(null);
        setDialogExclusaoAberto(false);
    };

    const adicionarTarefa = (nome: string) => {
        const novaTarefa: ListaTarefas = {
            id: Date.now(),
            nome,
            status: false
        };
        setTarefas([...tarefas, novaTarefa]);
        setModalAdicionarAberto(false);
    };

    return (
        <div className={style.container}>
            <div className={style['task-wrapper']}>
                <div className={style['task-list']}>
                    <h1>Suas Tarefas Hoje</h1>
                    {tarefas.length === 0 && (
                        <div className={style['empty-message']}>Você não possui nenhum tarefa. 😢</div>
                    )}
                    {tarefas.map((tarefa) => (
                        !tarefa.status && (
                            <div key={tarefa.id} className={style['task-item']}>
                                <div className={style['task-info']}>
                                    <input
                                        onClick={() => {
                                            setTarefas(tarefas.map((item) =>
                                                item.id === tarefa.id
                                                    ? { ...item, status: !item.status }
                                                    : item
                                            ));
                                        }}
                                        className={style['first-checkbox']}
                                        type="checkbox"
                                    />
                                    <span>{tarefa.nome}</span>
                                </div>
                                <div
                                    onClick={() => abrirDialogExclusao(tarefa.id)}
                                    className={style['delete-task']}
                                >
                                    <Image src={Lixo} alt="Deletar tarefa" />
                                </div>
                            </div>
                        )
                    ))}
                    <h1>Tarefas finalizadas</h1>
                    {tarefas.map((tarefa) => (
                        tarefa.status && (
                            <div key={tarefa.id} className={style['task-item']}>
                                <div className={style['task-info']}>
                                    <input
                                        onClick={() => {
                                            setTarefas(tarefas.map((item) =>
                                                item.id === tarefa.id
                                                    ? { ...item, status: !item.status }
                                                    : item
                                            ));
                                        }}
                                        className={style['custom-checkbox']}
                                        type="checkbox"
                                        checked
                                    />
                                    <span className={style.completed}>{tarefa.nome}</span>
                                </div>
                                <div
                                    onClick={() => abrirDialogExclusao(tarefa.id)}
                                    className={style['delete-task']}
                                >
                                    <Image src={Lixo} alt="Deletar tarefa" />
                                </div>
                            </div>
                        )
                    ))}
                </div>
                <button
                    onClick={() => setModalAdicionarAberto(true)}
                    className={style['button-adicionar-tarefa']}>Adicionar nova tarefa</button>
            </div>
            <DialogExclusao
                isOpen={dialogExclusaoAberto}
                onClose={cancelarExclusao}
                onConfirm={confirmarExclusao}
            />
            <DialogAdicionarTarefa
                isOpen={modalAdicionarAberto}
                onClose={() => setModalAdicionarAberto(false)}
                onAdd={adicionarTarefa}
            />
        </div>
    );
}
