import Star1 from "../star-icons/star1/Star1.jsx";
import Star2 from "../star-icons/star2/Star2.jsx";
import Star3 from "../star-icons/star3/Star3.jsx";
import { useContext } from "react";
import { StarContext } from "../star-context/StarContextProvider.jsx";

export default function Star({ full }) {

  const { starType } = useContext(StarContext);

  if (starType == 1) {
    return (
      <Star1 full={full} />
    );
  }

  if (starType == 2) {
    return (
      <Star2 full={full} />
    );
  }
  if (starType == 3) {
    return (
      <Star3 full={full} />
    );
  }
  if (starType == 4) {
    return (
      <Star3 full={full} />
    );
  }

}