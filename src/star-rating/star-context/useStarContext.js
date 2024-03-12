import { useState } from "react";

export default function useStarContext(defaultRating, maxRating) {

  const [rating, setRating] = useState(() => defaultRating <= maxRating ? defaultRating : 0);
  const [tempRating, setTemRating] = useState(0);

  const handleMouseLeave = () => {
    setTemRating(0);
  };

  const handleMouseEnter = (rate) => {
    setTemRating(rate);
  };

  const handleClick = (rate, onGetRating) => {
    setRating(rate);
    if (typeof onGetRating === "function") {
      onGetRating(rate);
    }
  };

  return ({
    rating,
    tempRating,
    handleMouseLeave,
    handleMouseEnter,
    handleClick
  });
}