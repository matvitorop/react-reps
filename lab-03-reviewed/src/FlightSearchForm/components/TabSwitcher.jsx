import CustomSelect from "../reusableItems/CustomeSelect.jsx";
import styles from "../styles/styles.module.css";
import {daysOfWeek} from "../datasets/datasets.js"
//import { motion } from "motion/react"


function getTabStyle(activeTab, tab) {
    return { background: activeTab === tab ? '#3498db' : '#ccc' };
}

export default function TabSwitcher({ activeTab, setActiveTab, control }) {
    // const variants = {
    //     hidden: { opacity: 0, x: -50 },
    //     visible: { opacity: 1, x: 0 },
    // }

    return (
        <div>
            <div className={styles.tab}>
                <button type="button" onClick={() => setActiveTab('departure')} style={getTabStyle(activeTab, 'departure')}>
                    Виліт
                </button>
                <button type="button" onClick={() => setActiveTab('return')} style={getTabStyle(activeTab, 'return')}>
                    Повернення
                </button>
            </div>
            {activeTab === 'departure' && (
                <CustomSelect name="departureDays" control={control} options={daysOfWeek} isMulti placeholder="Дні вильоту" />
            )}
            {activeTab === 'return' && (
                <CustomSelect name="returnDays" control={control} options={daysOfWeek} isMulti placeholder="Дні повернення" />
            )}
        </div>
    );
}
