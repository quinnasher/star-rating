import StarContextProvider from "./StarContextProvider.jsx";
import GetStarRating from "../GetStarRating.jsx";
import { useState } from "react";

export default function StarContext() {
  const [getRating, setGetRating] = useState();
  const handleGetRating = (rating) => {
    setGetRating(rating);
  };

  return (
    <StarContextProvider>
      <GetStarRating onGetRating={handleGetRating} maxRating={10} />
      <p>{getRating ? "The Rating is " + getRating : ""}</p>
    </StarContextProvider>
  );
}