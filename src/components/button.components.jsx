import "./index.scss";

export const Button = ({ text, action, ...props }) => {
  return (
    <button className="spell-button" onClick={action} {...props}>
      {text}
    </button>
  );
};
