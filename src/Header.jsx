import styles from "./App.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <img src="./todo_logo.svg" alt="Simple To Do Logo"/>
            <p>Simple Todo</p>
        </header>
    );
}

export default Header;