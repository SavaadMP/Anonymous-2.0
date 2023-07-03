import { useEffect, useRef, useState } from "react";
import UserCodeInput from "../UserCodeInput/UserCodeInput";
import "./UserCodeForm.scss";

function UserCodeForm() {
  const codeRef = useRef({});
  useEffect(() => {
    codeRef.current[0].focus();
    codeRef.current[0].addEventListener("paste", pasteUserCode);
    return codeRef.current[0].removeEventListener("paste", pasteUserCode);
  }, []);

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

  function verifyOTP(event) {
    event.preventDefault();
    const usercode = Object.values(code);
    var allLetters = usercode.join("");

    console.log(allLetters);
  }

  return (
    <form onSubmit={verifyOTP}>
      <div className="input_field">{renderInput()}</div>
      <button type="submit">Verify & Proceed</button>
    </form>
  );
}

export default UserCodeForm;
