import {useAtom} from "jotai";
import {filterAtom} from "../atoms.jsx";
import styles from "../styles/Filter.module.css"

export default function Filter() {
    const [filter, setFilter] = useAtom(filterAtom);

    return (
        <div className={styles.container}>
            <h3>Фільтр:</h3>
            <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                    <input
                        type="radio"
                        value="all"
                        checked={filter === 'all'}
                        onChange={() => setFilter('all')}
                        className={styles.radioInput}
                    />
                    Усі
                </label>
                <label className={styles.radioLabel}>
                    <input
                        type="radio"
                        value="completed"
                        checked={filter === 'completed'}
                        onChange={() => setFilter('completed')}
                        className={styles.radioInput}
                    />
                    Виконані
                </label>
                <label className={styles.radioLabel}>
                    <input
                        type="radio"
                        value="notCompleted"
                        checked={filter === 'notCompleted'}
                        onChange={() => setFilter('notCompleted')}
                        className={styles.radioInput}
                    />
                    Невиконані
                </label>
            </div>
        </div>
    )


}