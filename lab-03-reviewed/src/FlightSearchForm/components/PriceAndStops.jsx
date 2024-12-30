import CustomSelect from "../reusableItems/CustomeSelect.jsx";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import {Controller} from "react-hook-form";
import TabSwitcher from "./TabSwitcher.jsx";
import * as yup from "yup";
import styles from "../styles/styles.module.css";
import {marks, stopOptions, tipsOptions} from "../datasets/datasets.js"

export const priceAndStopsDetailsSchema = yup.object().shape({
    stops: yup.array()
        .min(1, "Оберіть хоча б одну зупинку")
        .required("Оберіть тип зупинок"),
    tips: yup.array()
        .min(1, "Оберіть хоча б один туристичний лайфхак")
        .required("Оберіть хоча б один лайфхак"),
    priceRange: yup.array()
        .of(yup.number().min(0))
        .length(2, "Діапазон ціни має містити два значення")
        .test(
            "is-valid-price-range",
            "Мінімальна ціна не може перевищувати максимальну",
            (value) => value && value[0] <= value[1]
        ),
    departureDays: yup
        .array()
        .of(
            yup.object({
                value: yup.string().required(),
                label: yup.string().required(),
            })
        )
        .min(1, 'Оберіть хоча б один день вильоту'),
    returnDays: yup
        .array()
        .of(
            yup.object({
                value: yup.string().required(),
                label: yup.string().required(),
            })
        )
        .min(1, 'Оберіть хоча б один день повернення'),
})

export default function PriceAndStopsDetails({control, activeTab, setActiveTab}) {
    return (
        <div className={styles.bottomPartUpdated}>
            <CustomSelect name="stops" control={control} options={stopOptions} isMulti placeholder="Зупинки"/>
            <CustomSelect name="tips" control={control} options={tipsOptions} isMulti placeholder="Лайфхаки"/>

            <Box sx={{width: 300}}>
                <Controller
                    name="priceRange"
                    control={control}
                    defaultValue={[100, 500]}
                    render={({field}) => (
                        <Slider
                            {...field}
                            value={field.value || [100, 500]}
                            onChange={(_, value) => field.onChange(value)}
                            valueLabelDisplay="auto"
                            getAriaLabel={() => 'Price range'}
                            min={0}
                            max={1000}
                            marks={marks}
                        />
                    )}
                />
            </Box>

            <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} control={control}/>
        </div>
    )
}