import iconAdd from "../../assests/icons/add.svg";

export const ButtonClose = ({
  height = 30,
  width = 30,
  className,
  handleClick,
}) => {
  return (
    <button
      type="button"
      className={`button-close ${className}`}
      onClick={handleClick}>
      <img height={height} width={width} src={iconAdd} alt="Remove" />
    </button>
  );
};
