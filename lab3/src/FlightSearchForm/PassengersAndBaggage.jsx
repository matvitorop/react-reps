import {useState} from "react";
import {Controller} from "react-hook-form";

// eslint-disable-next-line react/prop-types
export default function PassengersAndBaggage({ control }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <div>
            <button type="button" onClick={toggleDropdown}>
                Пасажири та багаж
                <br/>
            </button>
            {isOpen && (
                <div className="dropdown">
                    <Controller
                        name="adults"
                        control={control}
                        defaultValue={1}
                        render={({ field }) => (
                            <div>
                                <span>Дорослі Старше 11</span>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        field.onChange(Math.max(0, field.value - 1));
                                    }}
                                >-</button>
                                <span>{field.value}</span>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        field.onChange(field.value + 1);
                                    }}
                                >+</button>
                            </div>
                        )}
                    />
                    <Controller
                        name="children"
                        control={control}
                        defaultValue={0}
                        render={({ field }) => (
                            <div>
                                <span>Діти 2 – 11</span>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        field.onChange(Math.max(0, field.value - 1));
                                    }}
                                >-</button>
                                <span>{field.value}</span>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        field.onChange(field.value + 1);
                                    }}
                                >+</button>
                            </div>
                        )}
                    />
                    <Controller
                        name="infants"
                        control={control}
                        defaultValue={0}
                        render={({ field }) => (
                            <div>
                                <span>Немовлята До 2</span>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        field.onChange(Math.max(0, field.value - 1));
                                    }}
                                >-</button>
                                <span>{field.value}</span>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        field.onChange(field.value + 1);
                                    }}
                                >+</button>
                            </div>
                        )}
                    />
                    <Controller
                        name="handLuggage"
                        control={control}
                        defaultValue={0}
                        render={({ field }) => (
                            <div>
                                <span>Ручна поклажа</span>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        field.onChange(Math.max(0, field.value - 1));
                                    }}
                                >-</button>
                                <span>{field.value}</span>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        field.onChange(field.value + 1);
                                    }}
                                >+</button>
                            </div>
                        )}
                    />
                    <Controller
                        name="checkedBaggage"
                        control={control}
                        defaultValue={0}
                        render={({ field }) => (
                            <div>
                                <span>Зареєстрований багаж</span>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        field.onChange(Math.max(0, field.value - 1));
                                    }}
                                >-</button>
                                <span>{field.value}</span>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        field.onChange(field.value + 1);
                                    }}
                                >+</button>
                            </div>
                        )}
                    />
                </div>
            )}
        </div>
    );
}