import styles from './Feedback.module.css';

const Feedback = () => {
    return (
        <div className={styles.feedbackContainer}>
            <p className={styles.feedbackText}>
                Excelente seu cadastrado foi efetuado!
            </p>
        </div>
    )
}

export { Feedback }