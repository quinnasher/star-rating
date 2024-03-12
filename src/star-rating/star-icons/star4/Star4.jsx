import Star4Empty from "./Star4Empty.jsx";
import Star4Full from "./Star4Full.jsx";

export default function Star4({ full }) {
  return (
    <>
      {full ? <Star4Full /> : <Star4Empty />}
    </>
  );
}