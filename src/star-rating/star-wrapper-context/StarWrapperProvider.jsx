import { createContext } from "react";
import useStarWrapperContext from "./useStarWrapperContext.js";
import StarContextProvider from "../star-context/StarContextProvider.jsx";

export const StarWrapperContext = createContext(null);

export default function StarWrapperProvider({
                                              children,
                                              onGetRating,
                                              isSingleStarStatic = false,
                                              isFull = true,
                                              maxRating = 10,
                                              defaultRating = 0,
                                              starType = 4,
                                              size = 30,
                                              strokeColor = "#ffa600",
                                              fillColor = "#ffc400",
                                              shadowColor = "#000"
                                            }) {
  const starWrapperValue = useStarWrapperContext({ isFull });

  return (
    <StarWrapperContext.Provider value={starWrapperValue}>
      <StarContextProvider onGetRating={onGetRating}
                           isSingleStarStatic={isSingleStarStatic}
                           maxRating={maxRating}
                           defaultRating={defaultRating}
                           starType={starType}
                           size={size}
                           strokeColor={strokeColor}
                           fillColor={fillColor}
                           shadowColor={shadowColor}
      >
        {children}
      </StarContextProvider>
    </StarWrapperContext.Provider>
  );
}