import { createContext } from "react";
import useStarContext from "./useStarContext.js";

const StarContext = createContext(null);

export default function StarContextProvider({
                                              children,
                                              maxRating,
                                              defaultRating,
                                              size = 3,
                                              fontSize = 2,
                                              color = "#ffd700",
                                              onGetRating
                                            }) {
  return (
    <StarContext.Provider value={useStarContext(maxRating, defaultRating)}>
      {children}
    </StarContext.Provider>
  );
}