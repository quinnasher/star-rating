import StarBox from "./StarBox.jsx";
import PropTypes from "prop-types";
import star from "./star.svg";
import { useContext, useState } from "react";
import { StarIcon } from "./StarIcon.jsx";
import Star1 from "../star-icons/star1/Star1.jsx";
import Star2 from "../star-icons/star2/Star2.jsx";
import Star3 from "../star-icons/star3/Star3.jsx";
import Star4 from "../star-icons/star4/Star4.jsx";
import useStarContext from "../star-context/useStarContext.js";
import { StarContext } from "../star-context/StarContextProvider.jsx";
import Star from "./Star.jsx";


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

export default function GetStarRating() {
  const {
    handleMouseLeave,
    handleMouseEnter,
    handleClick,
    maxRating,
    fontSize,
    fillColor,
    rating,
    tempRating
  } = useContext(StarContext);
  let starCurIndex = useContext(StarContext);


  const text = {
    color: fillColor,
    fontSize: fontSize + "px"
  };


  return (
    <div style={container}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => {
            starCurIndex = 6;
            return <StarBox
              key={i}
              onClick={() => handleClick(i)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={(() => handleMouseEnter(i))}
            >{<Star full={tempRating ? tempRating >= i + 1 : rating >= i + 1} />}</StarBox>;
          }
        )}
      </div>
      <p style={text}>{tempRating || rating || ""}</p>
    </div>
  );
}