import "./AllMessages.scss";
import { useMessages } from "../../hooks/useAllMessages";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MessageBox from "../MessageBox/MessageBox";

const AllMessages = () => {
  const [filter, setFilter] = useState("viewAllMessages");

  const { messages } = useSelector((state) => state.messages);
  const { viewAllMessages, isLoading } = useMessages();

  useEffect(() => {
    const fetchMessages = async () => {
      await viewAllMessages(filter);
    };

    fetchMessages();
  }, [filter]);

  return (
    <section className="allMessages">
      <div className="filter_messages">
        <select
          name="message_type"
          id="message_type"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="viewAllMessages">All</option>
          <option value="viewMessages">messages</option>
          <option value="viewQuestions">question</option>
          <option value="viewOpinions">opinion</option>
          <option value="viewAdvices">Advice</option>
          <option value="viewCompliments">compliments</option>
        </select>
        <hr />
      </div>

      <div className="messages">
        {!isLoading ? (
          messages &&
          messages.map((item, index) => {
            return <MessageBox key={index} message={item} />;
          })
        ) : (
          <p className="loading">
            <i className="bx bxs-hourglass" style={{ color: "#4631be" }}></i>
            Please Wait..
          </p>
        )}
      </div>
    </section>
  );
};

export default AllMessages;
