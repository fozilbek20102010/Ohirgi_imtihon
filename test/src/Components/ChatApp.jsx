import React, { useState } from "react";
import "../Components/ChatApp.css";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <div className="chat-app">
      <div className="sidebar">
        <h2>Chat App</h2>
        <div className="contact">
          <div className="contact-name">name 1</div>
          <p>No messages yet</p>
        </div>
        <div className="contact">
          <div className="contact-name">name 2</div>
          <p>No messages yet</p>
        </div>
      </div>

      <div className="chat-section">
        <div className="messages">
          {messages.map((msg) => (
            <div key={msg.id} className="message">
              <div className="text">
                {msg.text}
                <span>{msg.time}</span>
              </div>
              <button className="delete-button" onClick={() => handleDelete(msg.id)}>
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Type an SMS..."
          />
          <button onClick={() => {}}>😊</button>
          <button onClick={() => {}}>📎</button>
          <button onClick={handleSend}>▶️</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
