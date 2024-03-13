import { useState } from "react";

export default function useStarContext({
                                         defaultRating,
                                         maxRating,
                                         onGetRating,
                                         size,
                                         strokeColor,
                                         fillColor,
                                         shadowColor,
                                         starType,
                                         isSingleStarStatic
                                       }) {

  const [rating, setRating] = useState(() => defaultRating <= maxRating ? defaultRating : 0);
  const [tempRating, setTemRating] = useState(0);
  const [newStarSize, setNewStarSize] = useState(size);

  const handleMouseLeave = () => {
    setTemRating(0);
  };

  const handleMouseEnter = (index) => {
    setTemRating(index + 1);
  };

  const handleClick = (index) => {
    setRating(index + 1);
    setNewStarSize(size + index * 2);
    if (typeof onGetRating === "function") {
      onGetRating(index + 1);
    }
  };

  const calculateSize = (isStatic = true, newSize = 32) => {
    return (isStatic ? size + "px" : newStarSize + newSize + "px");
  };

  return ({
    rating,
    tempRating,
    isSingleStarStatic,
    starType,
    maxRating,
    defaultRating,
    onGetRating,
    size,
    strokeColor,
    fillColor,
    shadowColor,
    calculateSize,
    handleMouseLeave,
    handleMouseEnter,
    handleClick
  });
}