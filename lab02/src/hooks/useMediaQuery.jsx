import {useState, useEffect} from "react";

export default function useMediaQuery(query) {
    const [isMatch, setIsMatch] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        console.log('hello')
        const mediaQuery = window.matchMedia(query);

        const handleChange = (event) => {
            setIsMatch(event.matches);
        }

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [query]);

    return isMatch;
}