import styles from './InputForm.module.css';

const InputForm = ({ name, id, placeholder, required, value, onChange }) => {
    return (
        <div>
            <input
                type={"text"}
                name={name}
                id={id}
                placeholder={placeholder}
                required={required}
                className={styles.inputField}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export { InputForm };