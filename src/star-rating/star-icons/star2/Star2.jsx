import Star2Full from "./Star2Full.jsx";
import Star2Empty from "./Star2Empty.jsx";

export default function Star2({ full }) {
  return (
    <>
      {full ? <Star2Full /> :
        <Star2Empty />}
    </>
  );
}