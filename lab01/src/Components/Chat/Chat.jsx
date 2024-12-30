import { useState } from 'react';
import './Style.css';


export default function Chat () {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="chat-container">
            <div className="message-list">
                {messages.map((message, index) => (
                    <div key={index} className="message-item">
                        {message}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="input"
                    placeholder="Напишіть повідомлення..."
                />
                <button onClick={handleSendMessage} className="send-button">
                    Відправити
                </button>
            </div>
        </div>
    );
};