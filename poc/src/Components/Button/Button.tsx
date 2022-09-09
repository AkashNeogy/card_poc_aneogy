import "./Button.css";

function Button({
  type,
  styleType,
  buttonText,
  left,
  right,
}: {
  type: string;
  styleType: string;
  buttonText: string;
  left: boolean;
  right: boolean;
}) {
  const buttonType = type.toLowerCase();
  const buttonStyleType = styleType.toLowerCase();
  const classValue =
    type === "outline"
      ? `btn btn-${buttonType}-${buttonStyleType}`
      : `btn btn-${buttonStyleType}`;
  return (
    <button type="button" className={classValue} id="button">
      {left && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      )}
      {buttonText}
      {right && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      )}
    </button>
  );
}
export default Button;
Button.defaultProps = {
  type: "outline",
  styleType: "primary",
  buttonText: "Default Button Text",
  left: false,
  right: false,
};
