import "./button.css";

const PRIMARY = "primary";
const SECONDARY = "secondary";
const DANGER = "danger";
const SUCCESS = "success";

export default function BaseButton({
  children,
  htmlType,
  type = PRIMARY,
  onClick,
  search = false,
}) {
  const typeObject = {
    primary: PRIMARY,
    danger: DANGER,
    success: SUCCESS,
    secondary: SECONDARY,
  };
  return (
    <>
      <button
        onClick={onClick}
        type={htmlType}
        className={`base-button ${typeObject[type]}`}
      >
        {children}
        {search && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M338.29 338.29L448 448"
            />
          </svg>
        )}
      </button>
    </>
  );
}
