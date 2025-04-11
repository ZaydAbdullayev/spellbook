import "./index.scss";

export const Button = ({ text, onclick, ...props }) => {
  return (
    <button class="spell-button" onClick={onclick} {...props}>
      {text}
    </button>
  );
};
