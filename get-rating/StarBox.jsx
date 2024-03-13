import { useContext } from "react";
import { StarContext } from "../star-context/StarContextProvider.jsx";
import Star4 from "../star-icons/star4/Star4.jsx";

export default function StarBox({ children, onMouseLeave, onMouseEnter, onClick }) {
  const { size } = useContext(StarContext);
  const starStyle = {
    width: size + "rpx",
    height: size + "px",
    cursor: "pointer",
    display: "block"
  };

  return (
    <span style={starStyle}
          role={"button"}
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
    >
      {children}
    </span>
  );
}