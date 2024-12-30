import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomDatePicker({ name, control, placeholder, minDate }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    placeholderText={placeholder}
                    minDate={minDate}
                    dateFormat="dd MMM yyyy"
                />
            )}
        />
    );
}