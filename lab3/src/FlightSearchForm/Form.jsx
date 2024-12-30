import {useForm, Controller} from 'react-hook-form'
import Select from 'react-select'
import {yupResolver} from '@hookform/resolvers/yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as yup from 'yup'
import PassengersAndBaggage from "./PassengersAndBaggage.jsx";

import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import {useState} from "react";


// Масиви для набору даних
const cityOption = [
    {value: "kyiv", label: "Київ", color: '#3498db'},
    {value: "warsaw", label: "Варшава", color: '#e74c3c'},
    {value: "munich", label: "Мюнхен", color: '#2ecc71'},
    {value: "zagreb", label: "Зегреб", color: '#f39c12'},
    {value: "bucharest", label: "Бухарест", color: '#9b59b6'},
]
const classOptions = [
    { value: 'economy', label: 'Економ-клас', color: '#000000' },
    { value: 'business', label: 'Бізнес-клас', color: '#000000' },
];
const directionOptions = [
    { value: 'both', label: 'В обидва кінці' },
    { value: 'oneWay', label: 'В один кінець' },
];

const stopOptions = [
    { value: 'nonStop', label: 'Без зупинок' },
    { value: 'oneStop', label: '1 зупинка' },
    { value: 'multipleStops', label: 'Кілька зупинок' },
    { value: 'overnightStop', label: 'Пересадка з ночівлею' },
];
const tipsOptions = [
    { value: 'guideIncluded', label: 'З гідом' },
    { value: 'selfOrganized', label: 'Самостійна організація' },
    { value: 'familyFriendly', label: 'Сімейний тур' },
];
const marks = [
    { value: 0, label: '0' },
    { value: 500, label: '500' },
    { value: 1000, label: '1000' },
];
const daysOfWeek  = [
    { value: 'monday', label: 'Понеділок' },
    { value: 'tuesday', label: 'Вівторок' },
    { value: 'wednesday', label: 'Середа' },
    { value: 'thursday', label: 'Четвер' },
    { value: 'friday', label: 'П’ятниця' },
    { value: 'saturday', label: 'Субота' },
    { value: 'sunday', label: 'Неділя' },
];
function valuetext(value) {
    return `${value}₴`;
}


// Стилі для елементів форми
const colorStyles = {
    control: (styles) => ({...styles, backgroundColor: '#fff'}),
    option: (styles, {data}) => {
        return {...styles, backgroundColor: '#2b6278', color: data.color};
    },
    multiValue: (styles, {data}) => ({...styles, backgroundColor: data.color, color: '#fff'})
}
const bottomPart = {
    display: 'flex',
    gap: '10px'
}
const upperPart = {
    display: 'flex',
    gap: '10px'
}

// Схема для простішої валідації форми
const schema = yup.object({
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
        .min(1, "Оберіть хоча б одне місто подорожі"),

    travelType: yup.object().required("Оберіть тип подорожі"),
    travelClass: yup.object().required("Оберіть клас в літаку"),
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
    adults: yup.number().min(1, "Має бути хоча б один дорослий").required(),
    children: yup.number().min(0).required(),
    infants: yup.number().min(0).required(),
    handLuggage: yup.number().min(0).required(),
    checkedBaggage: yup.number().min(0).required(),

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

// Форма
export default function Form() {
    const [activeTab, setActiveTab] = useState('departure');
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
        watch
    } = useForm({
        resolver: yupResolver(schema),
    });

    const selectedFromCities = watch("from") || [];
    const selectedToCities = watch("to") || [];
    const filteredToOptions = cityOption.filter(
        (city) => !selectedFromCities.some((selected) => selected.value === city.value)
    );
    const filteredFromOptions = cityOption.filter(
        (city) => !selectedToCities.some((selected) => selected.value === city.value)
    );

    const onSubmit = data => {
        console.log("Success: ")
        console.log(data)
    }
    const onError = data => {
        console.log("There are some problems: ")
        console.log(data)
    }

    const departureTime = watch("departureDate");

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div style={{...upperPart}}>
                <div>
                    <Controller
                        name="travelType"
                        control={control}
                        render={({field}) => (
                            <Select styles={colorStyles} {...field} options={directionOptions}
                                    placeholder="Оберіть напрямок"/>
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="travelClass"
                        control={control}
                        render={({field}) => (
                            <Select styles={colorStyles} {...field} options={classOptions}
                                    placeholder="Оберіть класс"/>
                        )}
                    />
                </div>
                <div>
                    <PassengersAndBaggage control={control} />
                </div>
            </div>

            <div style={{...bottomPart}}>
                <div>
                    <Controller
                        name="from"
                        control={control}
                        render={({field}) => (
                            <Select
                                {...field}
                                options={filteredFromOptions}
                                isMulti
                                styles={colorStyles}
                                placeholder="Оберіть місто"
                                readOnly={true}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="to"
                        control={control}
                        render={({field}) => (
                            <Select
                                {...field}
                                options={filteredToOptions}
                                isMulti
                                styles={colorStyles}
                                placeholder="Оберіть місто"
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="departureDate"
                        control={control}
                        render={({field}) => (
                            <DatePicker
                                {...field}
                                placeholderText={"Оберіть час відльоту"}
                                selected={field.value}
                                onChange={(date) => field.onChange(date)}
                                dateFormat="dd MMM yyyy"
                                minDate={new Date()}
                                ref={(el) => field.ref(el?.input || null)}
                                //inputProps={{ readOnly: true }}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="returnDate"
                        control={control}
                        render={({field}) => (
                            <DatePicker
                                {...field}
                                placeholderText={"Оберіть час прибуття:"}
                                selected={field.value}
                                onChange={(date) => field.onChange(date)}
                                dateFormat="dd MMM yyyy"
                                minDate={departureTime || new Date()}
                                ref={(el) => field.ref(el?.input || null)}
                            />
                        )}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <div>
                    <Controller
                        name="stops"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={stopOptions}
                                isMulti
                                styles={colorStyles}
                                placeholder="Зупинки"
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="tips"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={tipsOptions}
                                isMulti
                                styles={colorStyles}
                                placeholder="Туристичні лайфхаки"
                            />
                        )}
                    />
                </div>
                <div>
                    <Box sx={{ width: 300 }}>
                        <Controller
                            name="priceRange"
                            control={control}
                            defaultValue={[100, 500]}
                            render={({ field }) => (
                                <Slider
                                    {...field}
                                    value={field.value || [100, 500]}
                                    onChange={(_, value) => field.onChange(value)}
                                    valueLabelDisplay="auto"
                                    getAriaLabel={() => 'Price range'}
                                    getAriaValueText={valuetext}
                                    min={0}
                                    max={1000}
                                    marks={marks} // Маркери для шкали
                                />
                            )}
                        />
                    </Box>
                </div>
                <div>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                        <button
                            type="button"
                            onClick={() => setActiveTab('departure')}
                            style={{
                                background: activeTab === 'departure' ? '#3498db' : '#ccc',
                            }}
                        >
                            Виліт
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('return')}
                            style={{
                                background: activeTab === 'return' ? '#3498db' : '#ccc',
                            }}
                        >
                            Повернення
                        </button>
                    </div>

                    {activeTab === 'departure' && (
                        <div>
                            <Controller
                                name="departureDays"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isMulti
                                        options={daysOfWeek}
                                        styles={colorStyles}
                                        placeholder="Оберіть дні вильоту"
                                    />
                                )}
                            />
                        </div>
                    )}

                    {activeTab === 'return' && (
                        <div>
                            <Controller
                                name="returnDays"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isMulti
                                        options={daysOfWeek}
                                        styles={colorStyles}
                                        placeholder="Оберіть дні повернення"
                                    />
                                )}
                            />
                        </div>
                    )}
                </div>
            </div>

            <button type="submit">Підтвердити</button>
        </form>
    )
}