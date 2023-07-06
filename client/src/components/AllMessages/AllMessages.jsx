import MessageBox from "../MessageBox/MessageBox";
import "./AllMessages.scss";

const AllMessages = () => {
  return (
    <section className="allMessages">
      <div className="filter_messages">
        <select name="message_type" id="message_type">
          <option value="allMessages">all messages</option>
          <option value="question">question</option>
          <option value="opinion">opinion</option>
          <option value="allMessages">Advice</option>
          <option value="allMessages">compliments</option>
        </select>
        <hr />
      </div>

      <div className="messages">
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
      </div>
    </section>
  );
};

export default AllMessages;
