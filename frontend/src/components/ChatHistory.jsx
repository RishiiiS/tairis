import { useState, useEffect } from "react";
import "./styles/chathistory.css";

function ChatHistory({ chats, onSelectChat, onDeleteChat, currentChatId }) {
  const deleteChat = (chatId) => {
    onDeleteChat(chatId);
  };

  const newChat = () => {
    onSelectChat(null);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (d.toDateString() === today.toDateString()) {
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } else if (d.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return d.toLocaleDateString([], { month: "short", day: "numeric" });
    }
  };

  return (
    <div className="chat-history">
      <div className="chat-history-header">
        <button className="new-chat-btn" onClick={newChat}>
          <span className="icon">✎</span>
          New chat
        </button>
      </div>

      <div className="chat-history-list">
        {chats.length === 0 ? (
          <div className="empty-history">
            <p>No chat history yet</p>
          </div>
        ) : (
          chats.map((chat) => (
            <div
              key={chat.id}
              className={`history-item ${currentChatId === chat.id ? "active" : ""}`}
              onClick={() => onSelectChat(chat)}
            >
              <div className="history-item-content">
                <p className="chat-title">{chat.title}</p>
                <span className="chat-date">{formatDate(chat.lastUpdated)}</span>
              </div>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChat(chat.id);
                }}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ChatHistory;
