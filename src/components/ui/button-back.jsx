import { useHistory } from "react-router-dom";

export const ButtonBack = ({ className }) => {
  const history = useHistory();

  const classNames = ["button-back", className];

  return (
    <button
      type="button"
      className={classNames.join(" ")}
      onClick={history.goBack}>
      Назад
    </button>
  );
};
