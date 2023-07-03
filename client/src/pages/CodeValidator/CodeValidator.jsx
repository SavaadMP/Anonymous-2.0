import "./CodeValidator.scss";
import UserCodeForm from "../../components/UserCodeForm/UserCodeForm";

function CodeValidator() {
  return (
    <section className="usercode_container">
      <div className="usercode_content">
        <div className="usercode_icon">
          <i className="bx bxs-check-shield"></i>
        </div>
        <h4>Enter User Code</h4>
        <UserCodeForm />
      </div>
    </section>
  );
}

export default CodeValidator;
