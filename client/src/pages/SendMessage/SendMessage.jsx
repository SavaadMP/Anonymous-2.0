import "./SendMessage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUser } from "../../hooks/useGetUser";
import { useSendMessage } from "../../hooks/useSendMessage";
import Loader from "../../components/Loader/Loader";

function SendMessage() {
  const [user, setUser] = useState(null);
  const [type, setType] = useState("Message");
  const [message, setMessage] = useState("");

  const { id } = useParams();
  const { getSingleUser } = useGetUser();
  const { sendMsg, isLoading, error } = useSendMessage();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = await getSingleUser(id);
      setUser(user);
    };
    fetchUserDetails();
  }, []);

  async function sendMessageHandler(event) {
    event.preventDefault();
    await sendMsg(user.usercode, type, message);
  }

  return (
    <section className="sendMessage_container">
      <div className="sendMessage_content">
        {user ? (
          <form onSubmit={sendMessageHandler}>
            <div className="row">
              <div className="form_group">
                <label htmlFor="usercode">Usercode:</label>
                <input type="text" disabled value={user.usercode} />
              </div>
              <div className="form_group">
                <label htmlFor="usercode">Username:</label>
                <input type="text" disabled value={user.username} />
              </div>
            </div>
            <div className="form_group select_box">
              <label htmlFor="category">Message Type</label>
              <select
                name="category"
                id="category"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Message">Message</option>
                <option value="Question">Question</option>
                <option value="Opinion">Opinion</option>
                <option value="Advice">Advice</option>
                <option value="Compliments">Compliments</option>
              </select>
            </div>
            <div className="form_group">
              <label htmlFor="usercode">Message:</label>
              <textarea
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="form_group">
              <button type="submit">Send Message 🚀</button>
            </div>
          </form>
        ) : (
          <Loader
            icon="bx bx-loader-circle"
            rotate={true}
            text="Fetching Data..."
            passage="Please Wait... Or check your internet connection"
          />
        )}
      </div>
    </section>
  );
}

export default SendMessage;
