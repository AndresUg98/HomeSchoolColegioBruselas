import "./Input.css";

// eslint-disable-next-line react/prop-types
function Input({ placeholder, type, css = "input" }) {
  return <input className={css} type={type} placeholder={placeholder} />;
}

export { Input };
