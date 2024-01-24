export const Button = ({ children, outlined, className, icon, ...rest }) => (
  <button
    className={`${outlined ? "outlined" : ""} ${className}`}
    style={{ display: "flex" }}
    {...rest}
  >
    {icon}
    {children}
  </button>
);
