import Star4Empty from "./Star4Empty.jsx";
import Star4Full from "./Star4Full.jsx";
import { useContext } from "react";
import { StarContext } from "../../star-context/StarContextProvider.jsx";

export default function Star4({ full }) {
  const { fillColor, strokeColor } = useContext(StarContext);
  return (
    <>
      {full ? <Star4Full fillColor={fillColor} /> : <Star4Empty strokeColor={strokeColor} />}
    </>
  );
}