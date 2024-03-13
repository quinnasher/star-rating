import GetSingleStar from "../rating-box/GetSingleStar.jsx";
import StarContextProvider, { StarContext } from "../star-context/StarContextProvider.jsx";
import GetStarRating from "./GetStarRating.jsx";
import { useContext, useState } from "react";

export default function GetRatingBox() {
  const [rating, setRating] = useState(0);
  const handleGetRating = (rating) => {
    setRating(rating);
  };

  return (
    <StarContextProvider onGetRating={handleGetRating}>
      <section>
        <GetStarRating />
        <GetSingleStar isFull={true} />
        <p>{rating ? rating : ""}</p>
      </section>
    </StarContextProvider>
  );
}