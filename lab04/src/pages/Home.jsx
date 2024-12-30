import { useNavigate, Link } from 'react-router-dom';
import {useAuth} from "../components/Authenticator";
import styles from "../styles/Home.module.css";

export default function Home () {
    const navigate = useNavigate();
    const { isAuthorized, login, logout } = useAuth();

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Головна сторінка</h1>

            <p>Статус авторизації: <strong>{isAuthorized ? 'Авторизований' : 'Неавторизований'}</strong></p>
            <button onClick={login} className={styles.button}>Авторизуватися</button>
            <button onClick={logout} className={styles.button}>Вийти</button>

            <p>Спробуйте перейти на захищену сторінку:</p>
            <button
                onClick={() => navigate('/protected')}
                className={styles.button}
            >
                Перейти на захищену сторінку
            </button>
            <br/>
            <Link to="/unknown" className={styles.link}>
                Перейти на неіснуючу сторінку (404)
            </Link>
        </div>
    );
};