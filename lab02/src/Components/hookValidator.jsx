import useMediaQuery from "../hooks/useMediaQuery.jsx";
import '../styles/styles.css'

export default function HookValidator(props) {
    // eslint-disable-next-line react/prop-types
    const isMobile = useMediaQuery(props.query);

    return (
        <div
        className={isMobile ? "active" : "inactive"}>
            {isMobile ? (
                <p>{props.true}</p>
            ) : (
                <p>{props.false}</p>
            )}
        </div>
    );
}