import "./EmptyMessages.scss";

const EmptyMessages = () => {
  return (
    <div className="empty_messages_container">
      <div className="content">
        <i className="bx bx-envelope"></i>
        <h1>Massage Box Is Empty</h1>
        <p>Share your profile link ❤️ to get responses from your followers.</p>
      </div>
    </div>
  );
};

export default EmptyMessages;
