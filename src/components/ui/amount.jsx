import iconPlus from "../../assests/icons/add.svg";
import iconMinus from "../../assests/icons/minus.svg";

export const Amount = ({
  handleClickAdd,
  handleClickRemove,
  value,
  className,
  disabled,
  handleChange,
}) => {
  return (
    <div className={`amount ${className}`}>
      <button
        type="button"
        onClick={handleClickRemove}
        className="amount-button">
        <img
          src={iconMinus}
          width="20"
          height="20"
          alt="Plus"
          className="amount-image"
        />
      </button>
      <input
        type="text"
        className="amount-value"
        disabled={disabled}
        value={value}
        maxLength={3}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <button type="button" onClick={handleClickAdd} className="amount-button">
        <img
          src={iconPlus}
          width="20"
          height="20"
          alt="Minus"
          className="amount-image"
        />
      </button>
    </div>
  );
};
