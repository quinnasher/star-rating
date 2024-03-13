import Star3Full from "./Star3Full.jsx";
import Star3Empty from "./Star3Empty.jsx";

export default function Star3({ full }) {
  return (
    <>
      {full ? <Star3Full /> :
        <Star3Empty />}
    </>
  );
}