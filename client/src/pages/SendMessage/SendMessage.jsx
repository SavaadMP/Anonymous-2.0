import "./SendMessage.scss";

function SendMessage() {
  return (
    <section className="sendMessage_container">
      <div className="sendMessage_content">
        <form>
          <div className="row">
            <div className="form_group">
              <label htmlFor="usercode">Usercode:</label>
              <input type="text" disabled value="JD2023" />
            </div>
            <div className="form_group">
              <label htmlFor="usercode">Username:</label>
              <input type="text" disabled value="Muhammed Savaad MP" />
            </div>
          </div>
          <div className="form_group select_box">
            <label htmlFor="category">Message Type</label>
            <select name="category" id="category">
              <option value="Message">Message</option>
              <option value="Question">Question</option>
              <option value="Opinion">Opinion</option>
              <option value="Advice">Advice</option>
              <option value="Compliments">Compliments</option>
            </select>
          </div>
          <div className="form_group">
            <label htmlFor="usercode">Message:</label>
            <textarea rows={10} />
          </div>
          <div className="form_group">
            <button type="submit">Send Message 🚀</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SendMessage;
