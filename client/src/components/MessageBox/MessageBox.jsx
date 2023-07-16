import "./MessageBox.scss";
import { API_URI } from "../../api/api";
import { useState } from "react";

const MessageBox = ({ message }) => {
  const [read, setRead] = useState(message.markedAsRead);

  async function changeReadStatus(value) {
    const response = await fetch(`${API_URI}/changeReadStatus/${message._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    });

    if (!response.ok) {
      alert("Something went wrong!! Try again later");
    } else {
      setRead(!read);
    }
  }

  return (
    <div className={`message_container ${!read ? "" : "active"}`}>
      <div className="message">
        <p>
          <span>{message.type}</span>
          {message.message}
        </p>
      </div>

      <div className="mark_as_read">
        {read == false ? (
          <button onClick={() => changeReadStatus(true)}>Mark as read</button>
        ) : (
          <button onClick={() => changeReadStatus(false)}>
            Mark as unread
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
