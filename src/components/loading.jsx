import action from "../assets/action.gif";
import "./index.scss";

export const Loading = () => {
  return (
    <div className="loader-box">
      <img src={action} alt="action" />
    </div>
  );
};
