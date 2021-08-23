import { useSelector } from "react-redux";
import get from "lodash/get";

export const withLoading = (Component, loadingDependency) => (props) => {
  const isLoading = useSelector((state) => get(state, loadingDependency));

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return <Component {...props} />;
};
