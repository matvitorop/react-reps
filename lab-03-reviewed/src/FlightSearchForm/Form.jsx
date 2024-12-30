import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import 'react-datepicker/dist/react-datepicker.css'
import * as yup from 'yup'

import {useEffect, useState} from "react";
import TravelDetails, {travelDetailsSchema} from "./components/TravelDetails.jsx";
import FlightDetails, {flightDetailsSchema} from "./components/FlightDetails.jsx";
import PriceAndStopsDetails, {priceAndStopsDetailsSchema} from "./components/PriceAndStops.jsx";

// schema to control submitted data
const schema = yup.object({
    ...travelDetailsSchema.fields,
    ...flightDetailsSchema.fields,
    ...priceAndStopsDetailsSchema.fields,
})

// form
export default function Form() {
    const [activeTab, setActiveTab] = useState('departure');

    const {
        handleSubmit,
        control,
        watch,
        reset
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: JSON.parse(localStorage.getItem('formData')) || {}
    });

    const watchAllFields = watch();

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(watchAllFields));
    }, [watchAllFields]);


    const onSubmit = data => {
        console.log("Success: ")
        console.log(data)
        localStorage.removeItem('formData');
    }
    const onError = data => {
        console.log("There are some problems: ")
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>

            <TravelDetails control={control} />
            <FlightDetails control={control} watch={watch}/>
            <PriceAndStopsDetails control={control} activeTab={activeTab} setActiveTab={setActiveTab} />

            <button type="submit">Підтвердити</button>
        </form>
    )
}