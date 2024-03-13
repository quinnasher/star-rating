import { useContext } from "react";
import { StarContext } from "../star-context/StarContextProvider.jsx";
import Star1Full from "../star-icons/star1/Star1Full.jsx";
import Star2Full from "../star-icons/star2/Star2Full.jsx";
import Star3Full from "../star-icons/star3/Star3Full.jsx";
import Star4Full from "../star-icons/star4/Star4Full.jsx";
import Star1Empty from "../star-icons/star1/Star1Empty.jsx";
import Star2Empty from "../star-icons/star2/Star2Empty.jsx";
import Star3Empty from "../star-icons/star3/Star3Empty.jsx";
import Star4Empty from "../star-icons/star4/Star4Empty.jsx";

export default function GetSingleStar({ isFull = true, newSize = 32 }) {
  const { starType, isSingleStarStatic } = useContext(StarContext);
  if (starType === 1) {
    return (isFull ? <Star1Full newSize={newSize} isStatic={isSingleStarStatic} /> :
      <Star1Empty newSize={newSize} isStatic={isSingleStarStatic} />);
  }
  if (starType === 2) {
    return (isFull ? <Star2Full isStatic={isSingleStarStatic} newSize={newSize} /> :
      <Star2Empty isStatic={isSingleStarStatic} newSize={newSize} />);
  }
  if (starType === 3) {
    return (isFull ? <Star3Full isStatic={isSingleStarStatic} newSize={newSize} /> :
      <Star3Empty isStatic={isSingleStarStatic} newSize={newSize} />);
  }
  if (starType === 4) {
    return (isFull ? <Star4Full isStatic={isSingleStarStatic} newSize={newSize} /> :
      <Star4Empty isStatic={isSingleStarStatic} newSize={newSize} />);
  }
}