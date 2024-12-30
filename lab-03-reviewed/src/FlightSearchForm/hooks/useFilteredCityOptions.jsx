import { useMemo } from "react";

export default function useFilteredCityOptions(watch, cityOption) {
    const selectedFromCities = watch("from") || [];
    const selectedToCities = watch("to") || [];

    const filteredToOptions = useMemo(() => {
        return cityOption.filter(
            (city) => !selectedFromCities.some((selected) => selected.value === city.value)
        );
    }, [selectedFromCities, cityOption]);

    const filteredFromOptions = useMemo(() => {
        return cityOption.filter(
            (city) => !selectedToCities.some((selected) => selected.value === city.value)
        );
    }, [selectedToCities, cityOption]);

    return { filteredFromOptions, filteredToOptions };
}