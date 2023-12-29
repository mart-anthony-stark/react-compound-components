const Form = ({ children }) => {
  return <div className="flex justify-center gap-2">{children}</div>;
};

Form.Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input input-bordered w-full max-w-xs"
    />
  );
};

Form.Button = ({ title, onclick }) => {
  return (
    <button className="btn btn-accent" onClick={onclick}>
      {title}
    </button>
  );
};

export default Form;
