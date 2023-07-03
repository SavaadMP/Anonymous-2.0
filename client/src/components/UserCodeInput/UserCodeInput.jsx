const UserCodeInput = ({
  name,
  handleChange,
  codeRef,
  index,
  handleBackSpace,
  value,
}) => {
  return (
    <input
      type="text"
      ref={(element) => (codeRef.current[index] = element)}
      name={name}
      onChange={handleChange}
      onKeyUp={handleBackSpace}
      value={value}
      required={true}
    />
  );
};

export default UserCodeInput;
