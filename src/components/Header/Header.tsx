import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>Movie Find<span className={styles.r}>R</span></Link>
            </div>
        </header>
    );
};

export default Header;