import { Link } from 'react-router-dom';
import styles from "../styles/Home.module.css";

export default function Forbidden () {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>403 - Доступ заборонено</h1>
            <p>У вас немає дозволу переглядати цю сторінку.</p>
            <Link to="/" className={styles.link}>
                Повернутися на головну
            </Link>
        </div>
    );
};