function Button({ type = "button", btnTitle, onClick }) {
  return (
    <>
      <div>
        <button type={type} onClick={onClick}>
          {btnTitle}
        </button>
      </div>
    </>
  );
}

export default Button;
