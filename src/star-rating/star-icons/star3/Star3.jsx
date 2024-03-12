import Star3Full from "./Star3Full.jsx";
import Star3Empty from "./Star3Empty.jsx";

export default function Star3({
                                full,
                                size = 50,
                                strokeColor = "#ffa600",
                                fillColor = "#ffc400"
                              }) {
  return (
    <>
      {full ? <Star3Full size={size} strokeColor={strokeColor} fillColor={fillColor} /> :
        <Star3Empty size={size} strokeColor={strokeColor} />}
    </>
  );
}