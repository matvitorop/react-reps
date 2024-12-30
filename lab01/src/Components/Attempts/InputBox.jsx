import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export default function InputBox({ onSendMessage }) {
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="input-container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="input"
                placeholder='Напишіть повідомлення'
            />
            <button onClick={handleSendMessage} className='send-button'>Надіслати</button>
        </div>
    );
}