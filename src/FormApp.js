import React from "react";
import styles from "./formApp.module.css";
import Notification from "./components/Notification";

class FormApp extends React.Component {
    state = {
        showNotification: false,
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    submitForm = (e) => {
        e.preventDefault();
        e.target.reset();
        this.setState({ showNotification: true });
    };
    render() {
    const { firstName, secondName, showNotification } =
        this.state;
        return (
        <>
        <h1 className={styles.formTitle}>Регистрация пользователя</h1>
        <form className={styles.form} onSubmit={this.submitForm}>
            <input className={styles.formInput}
            type="text"
            name="firstName"
            placeholder="Введите Имя"
            onChange={this.handleChange}
            />
            <input className={styles.formInput}
            type="text"
            name="secondName"
            placeholder="Введите фамилию"
            onChange={this.handleChange}
            />
            <input className={styles.formInput}
            type="password"
            name="password"
            placeholder="Введите пароль"
            onChange={this.handleChange}
            />
            <input className={styles.formInput}
            type="email"
            name="email"
            placeholder="Введите ваше e-mail"
            onChange={this.handleChange}
            />
            <button className={styles.formButton}>Зарегестрироваться</button>
            <br />
        </form>
        {showNotification && (
                <Notification firstName={firstName} secondName={secondName} />
            )}
        </>
        );
    }
}
export default FormApp;
