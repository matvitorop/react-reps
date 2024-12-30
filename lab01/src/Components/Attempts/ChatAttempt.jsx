 import { useState } from 'react';
import MessageList from './MessageList';
import InputBox from './InputBox';
import '../Chat/Style.css';

export default function ChatContainer() {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <div className="chat-container">
            <MessageList messages={messages} />
            <InputBox onSendMessage={addMessage} />
        </div>
    );
}
