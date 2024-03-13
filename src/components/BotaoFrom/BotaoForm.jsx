import styles from './BotaoForm.module.css';

const BotaoForm = ({ loadingCriar, label }) => {
    return (
        <button
            type="submit"
            className={styles.button}
        >
            {loadingCriar ? 'Cadastrando...' : label}
        </button>
    )
}

export { BotaoForm }