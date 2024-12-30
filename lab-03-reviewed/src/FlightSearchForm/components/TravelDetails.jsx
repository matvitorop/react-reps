import CustomSelect from "../reusableItems/CustomeSelect.jsx";
import * as yup from "yup";
import styles from "../styles/styles.module.css";
import { lazy, Suspense } from 'react';
import {classOptions, directionOptions} from "../datasets/datasets.js"

const PassengersAndBaggage = lazy(() => import('./PassengersAndBaggage.jsx'));

export const travelDetailsSchema = yup.object().shape({
    travelType: yup.object().required("Оберіть тип подорожі"),
    travelClass: yup.object().required("Оберіть клас в літаку"),
    adults: yup.number().min(1, "Має бути хоча б один дорослий").required(),
    children: yup.number().min(0).required(),
    infants: yup.number().min(0).required(),
    handLuggage: yup.number().min(0).required(),
    checkedBaggage: yup.number().min(0).required(),
})

export default function TravelDetails({ control }) {
    return (
        <div className={styles.upperPart}>
            <CustomSelect name="travelType" control={control} options={directionOptions} placeholder="Оберіть напрямок" />
            <CustomSelect name="travelClass" control={control} options={classOptions} placeholder="Оберіть клас" />
            <Suspense fallback={<div>Завантаження...</div>}>
                <PassengersAndBaggage control={control} />
            </Suspense>
        </div>
    );
}