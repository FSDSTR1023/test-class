import { useState } from "react";

export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <h3 onClick={toggle}>{title.toUpperCase()}</h3>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
