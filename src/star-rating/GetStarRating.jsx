import Star from "./Star.jsx";
import PropTypes from "prop-types";
import star from "./star.svg";
import { useState } from "react";
import { StarIcon } from "./StarIcon.jsx";
import Star1 from "./star-icons/star1/Star1.jsx";
import Star2 from "./star-icons/star2/Star2.jsx";
import Star3 from "./star-icons/star3/Star3.jsx";
import Star4 from "./star-icons/star4/Star4.jsx";


// StarRating.prototype = {
//   maxRa
// };
const container = {
  display: "flex",
  gap: "1rem"
};

const starContainer = {
  display: "flex"
};

export default function GetStarRating({
                                        maxRating = 5,
                                        size = 3,
                                        fontSize = 2,
                                        color = "#ffd700",
                                        onGetRating,
                                        defaultRating = 0
                                      }) {

  const [rating, setRating] = useState(() => defaultRating <= maxRating ? defaultRating : 0);
  const [tempRating, setTemRating] = useState(0);

  const text = {
    color: color,
    fontSize: fontSize + "rem"
  };

  const handleMouseLeave = () => {
    setTemRating(0);
  };

  const handleMouseEnter = (rate) => {
    setTemRating(rate);
  };

  const handleClick = (rate) => {
    setRating(rate);
    if (typeof onGetRating === "function") {
      onGetRating(rate);
    }

  };

  return (
    <div style={container}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) =>
          <Star
            key={i}
            size={size}
            starIcon={<Star4 full={tempRating ? tempRating >= i + 1 : rating >= i + 1} />}
            onClick={() => handleClick(i + 1)}
            onMouseEnter={() => handleMouseEnter(i + 1)}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </div>
      <p style={text}>{tempRating || rating || ""}</p>
    </div>
  );
}