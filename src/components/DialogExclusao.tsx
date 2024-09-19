import styles from '../styles/DialogExclusao.module.scss';

interface DialogExclusaoProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}
export default function DialogExclusao({ isOpen, onClose, onConfirm }: DialogExclusaoProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>Deletar tarefa</h2>
                <p>Tem certeza que você deseja deletar essa tarefa?</p>
                <div className={styles.modalActions}>
                    <button onClick={onClose} className={styles['cancelar-button']}>Cancelar</button>
                    <button onClick={onConfirm} className={styles['deletar-button']}>Deletar</button>
                </div>
            </div>
        </div>
    );
}