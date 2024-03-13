import { createContext } from "react";
import useStarContext from "./useStarContext.js";

export const StarContext = createContext(null);

export default function StarContextProvider({
                                              children,
                                              onGetRating,
                                              isSingleStarStatic,
                                              maxRating,
                                              defaultRating,
                                              starType,
                                              size,
                                              strokeColor,
                                              fillColor,
                                              shadowColor
                                            }) {

  const starContextValue = useStarContext({
    maxRating,
    defaultRating,
    onGetRating,
    size,
    strokeColor,
    fillColor,
    shadowColor,
    starType,
    isSingleStarStatic
  });

  return (
    <StarContext.Provider value={starContextValue}>
      {children}
    </StarContext.Provider>
  );
}