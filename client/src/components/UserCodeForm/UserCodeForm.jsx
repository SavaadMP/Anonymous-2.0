import "./UserCodeForm.scss";
import { useEffect, useRef, useState } from "react";
import { useVerifyCode } from "../../hooks/useVerifyCode";
import UserCodeInput from "../UserCodeInput/UserCodeInput";

function UserCodeForm() {
  const codeRef = useRef({});
  useEffect(() => {
    codeRef.current[0].focus();
    codeRef.current[0].addEventListener("paste", pasteUserCode);
    return codeRef.current[0].removeEventListener("paste", pasteUserCode);
  }, []);

  const { verifyUserCode, isLoading, error } = useVerifyCode();

  const pasteUserCode = (event) => {
    const pastedText = event.clipboardData.getData("text");
    const fieldValues = {};
    Object.keys(code).forEach((keys, index) => {
      fieldValues[keys] = pastedText[index];
    });
    setCode(fieldValues);
    codeRef.current[5].focus();
  };

  const [code, setCode] = useState({
    digitOne: "",
    digitTwo: "",
    digitThree: "",
    digitFour: "",
    digitFive: "",
    digitSix: "",
  });

  function handleChange(event, index) {
    const { name, value } = event.target;
    setCode((prev) => ({
      ...prev,
      [name]: value.slice(-1),
    }));

    if (value && index < 5) codeRef.current[index + 1].focus();
  }

  function handleBackSpace(e, index) {
    if (e.key === "Backspace") {
      if (index > 0) codeRef.current[index - 1].focus();
    }
  }

  const renderInput = () => {
    return Object.keys(code).map((digit, index) => {
      return (
        <UserCodeInput
          codeRef={codeRef}
          key={index}
          index={index}
          handleChange={(event) => handleChange(event, index)}
          name={digit}
          handleBackSpace={(event) => handleBackSpace(event, index)}
          value={code[digit]}
        />
      );
    });
  };

  async function verifyOTP(event) {
    event.preventDefault();
    const usercode = Object.values(code);
    var allLetters = usercode.join("");

    await verifyUserCode(allLetters);
  }

  return (
    <form className="usercode_form" onSubmit={verifyOTP}>
      <div className="input_field">{renderInput()}</div>
      {isLoading && (
        <div className="info_box" style={{ width: "100%" }}>
          <button
            style={{
              width: "100%",
            }}
            type="button"
          >
            Please Wait..
          </button>
        </div>
      )}

      {error && (
        <div className="info_box" style={{ width: "100%" }}>
          <button
            className="error-btn"
            style={{
              width: "100%",
            }}
            type="button"
          >
            {error}
          </button>
        </div>
      )}

      <button
        style={{
          marginTop: "10px",
        }}
        type="submit"
      >
        Verify & Proceed
      </button>
    </form>
  );
}

export default UserCodeForm;
