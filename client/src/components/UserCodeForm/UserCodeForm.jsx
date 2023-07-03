import UserCodeInput from "../UserCodeInput/UserCodeInput";
import "./UserCodeForm.scss";

function UserCodeForm() {
  return (
    <form>
      <div className="input_field">
        <UserCodeInput />
        <UserCodeInput />
        <UserCodeInput />
        <UserCodeInput />
        <UserCodeInput />
        <UserCodeInput />
      </div>
      <button>Verify & Proceed</button>
    </form>
  );
}

export default UserCodeForm;
