// eslint-disable-next-line react/prop-types
export default function MessageItem({ message, index }) {
    return (
        <div key={index} className="message-item">
            {message}
        </div>
    );
}