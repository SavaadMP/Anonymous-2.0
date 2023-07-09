import "./MessageBox.scss";

const MessageBox = ({ message }) => {
  return (
    <div className="message_container">
      <div className="message">
        <p>
          <span>{message.type}</span>
          {message.message}
        </p>
      </div>

      <div className="mark_as_read">
        <button>Take Screenshot</button>
        <button>More options</button>
      </div>
    </div>
  );
};

export default MessageBox;
