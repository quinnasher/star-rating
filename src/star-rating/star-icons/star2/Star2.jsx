import Star2Full from "./Star2Full.jsx";
import Star2Empty from "./Star2Empty.jsx";

export default function Star2({
                                full,
                                size = 50,
                                strokeColor = "#ffa600",
                                fillColor = "#ffc400",
                                shadowColor = "#FFC400FF"
                              }) {
  return (
    <>
      {full ? <Star2Full strokeColor={strokeColor} shadowColor={shadowColor} fillColor={fillColor} size={size} /> :
        <Star2Empty strokeColor={strokeColor} fillColor={fillColor} shadowColor={shadowColor} size={size} />}
    </>
  );
}