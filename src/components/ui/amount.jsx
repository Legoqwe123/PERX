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
    <div className={`shop-product__amount ${className}`}>
      <button
        type="button"
        onClick={handleClickRemove}
        className="shop-product__amount-button">
        <img
          src={iconMinus}
          width="20"
          height="20"
          alt="Plus"
          className="shop-product__amount-image"
        />
      </button>
      <input
        type="text"
        className="shop-product__amount-value"
        disabled={disabled}
        value={value}
        maxLength={3}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={handleClickAdd}
        className="shop-product__amount-button">
        <img
          src={iconPlus}
          width="20"
          height="20"
          alt="Minus"
          className="shop-product__amount-image"
        />
      </button>
    </div>
  );
};
