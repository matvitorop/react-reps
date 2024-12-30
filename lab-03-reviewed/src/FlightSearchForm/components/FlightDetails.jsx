import CustomSelect from "../reusableItems/CustomeSelect.jsx";
import CustomDatePicker from "../reusableItems/CustomDatePicker.jsx";
import * as yup from "yup";
import styles from "../styles/styles.module.css";
import useFilteredCityOptions from "../hooks/useFilteredCityOptions.jsx";
import {cityOption} from "../datasets/datasets.js"

export const flightDetailsSchema = yup.object().shape({
    from: yup.array()
        .of(
            yup.object({
                value: yup.string().required(),
                label: yup.string().required(),
                color: yup.string().required(),
            })
        )
        .min(1, "Оберіть хоча б одне місто вильоту")
        .required("Оберіть місто/міста вильоту"),
    to: yup.array()
        .of(
            yup.object({
                value: yup.string().required(),
                label: yup.string().required(),
                color: yup.string().required(),
            })
        )
        .min(1, "Оберіть хоча б одне місто подорожі")
        .required("Оберіть місто/міста вильоту"),


    departureDate: yup.date().required("Оберіть час відправлення"),
    returnDate: yup.date().required("Оберіть час прибуття назад")
        .test(
            "is-after-departure",
            "Час прибуття має бути пізніше за час відправлення",
            function (value) {
                const { departureDate } = this.parent;
                if (!departureDate || !value) return true;
                return value >= departureDate;
            }
        ),
})

export default function FlightDetails({ control, watch }) {
    const departureTime = watch("departureDate");

    const { filteredFromOptions, filteredToOptions } = useFilteredCityOptions(watch, cityOption);

    return (
        <div className={styles.bottomPart}>
            <CustomSelect name="from" control={control} options={filteredFromOptions} isMulti placeholder="Місто вильоту" />
            <CustomSelect name="to" control={control} options={filteredToOptions} isMulti placeholder="Місто прибуття" />
            <CustomDatePicker name="departureDate" control={control} placeholder="Дата вильоту" minDate={new Date()}/>
            <CustomDatePicker name="returnDate" control={control} placeholder="Дата повернення" minDate={departureTime} />
        </div>
    );
}