import StarContextProvider from "./StarContextProvider.jsx";
import GetStarRating from "../get-rating/GetStarRating.jsx";


export default function StarWrapper() {

  return (
    <StarContextProvider>
      <GetStarRating />
    </StarContextProvider>
  );
}