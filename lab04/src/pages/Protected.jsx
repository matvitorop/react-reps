import {Link} from 'react-router-dom';
import styles from "../styles/Home.module.css";

export default function Protected () {

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Захищена сторінка</h1>
            <p>Вітаємо! Ви маєте доступ до цього ресурсу.</p>

            <Link to="/" className={styles.link}>
                Повернутися на головну
            </Link>
        </div>
    );
};
