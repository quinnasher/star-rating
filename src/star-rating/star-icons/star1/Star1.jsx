import Star1Full from "./Star1Full.jsx";
import Star1Empty from "./Star1Empty.jsx";

export default function Star1({
                                full,
                                size = 50,
                                strokeColor = "#ffa600",
                                fillColor = "#ffc400",
                                shadowColor = "#FFC400FF"
                              }) {
  return (
    <>
      {full ? <Star1Full size={size} fillColor={fillColor} shadowColor={shadowColor} strokeColor={strokeColor} /> :
        <Star1Empty size={size} strokeColor={strokeColor} shadowColor={shadowColor} />}
    </>
  );
}