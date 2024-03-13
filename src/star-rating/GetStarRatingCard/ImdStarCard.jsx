import StarWrapperProvider from "../star-wrapper-context/StarWrapperProvider.jsx";
import GetSingleStar from "../rating-box/GetSingleStar.jsx";
import GetStarRating from "../get-rating/GetStarRating.jsx";
import { useState } from "react";

const rating = {
  position: "absolute",
  color: "#fff",
  fontSize: "1.2rem",
  fontWeight: "medium"

};

const singleStarContainer = {
  position: "absolute",
  top: "-11rem",
  bottom: "6rem",
  display: "flex",
  justifyItems: "center",
  alignItems: "center"
};

const cardContainer = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  width: "300px",
  marginInline: "auto"

};

const starRating = {
  marginBlock: "2rem",
  zIndex: "10000"
};


export default function ImdStarCard({
                                      maxRating = 10,
                                      defaultRating = 0,
                                      starType = 3,
                                      starSize: size = 30,
                                      textColor = "#e2b616",
                                      strokeColor = "#aaaaaa",
                                      fillColor = "#5799ef",
                                      shadowColor = "#000",
                                      cardWidth = 500,
                                      bgColor = "#1f1f1f",
                                      onSendRating
                                    }) {

  const [getRating, setGetRating] = useState("");
  const handleGetRating = (rating) => {
    setGetRating(rating);
  };

  const handleSendRating = () => {
    if (onSendRating === "function") {
      onSendRating({ rating: getRating });
    }
  };

  const mainContainer = {
    marginTop: "4rem",
    width: cardWidth + "px",
    backgroundColor: bgColor,
    borderRadius: "1rem",
    padding: "3rem",
    marginInline: "auto"


  };

  const text = {
    color: textColor,
    textTransform: "uppercase",
    fontWeight: "bold"
  };

  const btn = {
    backgroundColor: textColor,
    width: "100%",
    color: "#000",
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBlock: "0.7rem",
    borderRadius: "1rem",
    marginInline: "3rem",
    zIndex: "10000"
  };

  return (
    <StarWrapperProvider onGetRating={handleGetRating}
                         maxRating={maxRating}
                         defaultRating={defaultRating}
                         starType={starType}
                         size={size}
                         strokeColor={strokeColor}
                         fillColor={fillColor}
                         shadowColor={shadowColor}
    >
      <div style={mainContainer}>
        <section style={cardContainer}>
          <div style={singleStarContainer}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <GetSingleStar isFull={true} newSize={60} />
              <span style={rating}>{getRating ? getRating : "?"}</span>
            </div>
          </div>
          <h2 style={text}>Rate this</h2>
          <div style={starRating}>
            <GetStarRating />
          </div>
          <button disabled={getRating < 1}
                  onClick={handleSendRating}
                  style={getRating ? btn : { ...btn, opacity: "0.5" }}>Rate
          </button>
        </section>
      </div>
    </StarWrapperProvider>
  );
}