import MessageItem from './MessageItem';

// eslint-disable-next-line react/prop-types
export default function MessageList({ messages }) {
    return (
        <div className="message-list">
            {/* eslint-disable-next-line react/prop-types */}
            {messages.map((message, index) => (
                // eslint-disable-next-line react/jsx-key
                <MessageItem message={message} index={index} />
            ))}
        </div>
    );
}