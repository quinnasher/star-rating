import StarBox from "./StarBox.jsx";
import { useContext } from "react";
import { StarContext } from "../star-context/StarContextProvider.jsx";
import Star from "./Star.jsx";


const container = {
  display: "flex",
  gap: "1rem"
};

const starContainer = {
  display: "flex"
};

export default function GetStarRating() {
  const {
    handleMouseLeave,
    handleMouseEnter,
    handleClick,
    maxRating,
    rating,
    tempRating
  } = useContext(StarContext);

  return (
    <div style={container}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => {
            return <StarBox
              key={i}
              onClick={() => handleClick(i)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={(() => handleMouseEnter(i))}
            >{<Star full={tempRating ? tempRating >= i + 1 : rating >= i + 1} />}
            </StarBox>;
          }
        )}
      </div>
    </div>
  );
}