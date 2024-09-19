"use client"

import styles from '../styles/DialogAdicionarTarefa.module.scss';
import { useState } from "react";

interface DialogAdicionarTarefaProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (nome: string) => void;
}
export default function DialogAdicionarTarefa({ isOpen, onClose, onAdd }: DialogAdicionarTarefaProps) {
    const [nome, setNome] = useState('');

    if (!isOpen) return null;

    const handleAddClick = () => {
        if (nome.trim()) {
            onAdd(nome);
            setNome('');
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>Adicionar Tarefa</h2>
                <label htmlFor='tarefa'>Título</label>
                <input
                    id='tarefa'
                    type="text"
                    placeholder="Digite"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={styles.input}
                />
                <div className={styles.modalActions}>
                    <button onClick={onClose} className={styles['cancelar-button']}>Cancelar</button>
                    <button onClick={handleAddClick} className={styles['adicionar-button']}>Adicionar</button>
                </div>
            </div>
        </div>
    );
}