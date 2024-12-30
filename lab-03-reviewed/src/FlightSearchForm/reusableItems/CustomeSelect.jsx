import Select from 'react-select';
import { Controller } from 'react-hook-form';

export default function CustomSelect({ name, control, options, isMulti = false, placeholder }) {
    const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: '#fff' }),
        option: (styles, { data }) => ({ ...styles, backgroundColor: data.color || '#2b6278', color: '#fff' }),
        multiValue: (styles, { data }) => ({ ...styles, backgroundColor: data.color || '#2b6278', color: '#fff' }),
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Select
                    {...field}
                    options={options}
                    isMulti={isMulti}
                    styles={colorStyles}
                    placeholder={placeholder}
                    onChange={(value) => field.onChange(value)}
                />
            )}
        />
    );
}