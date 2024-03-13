import Star1Full from "./Star1Full.jsx";
import Star1Empty from "./Star1Empty.jsx";

export default function Star1({ full }) {
  return (
    <>
      {full ? <Star1Full /> :
        <Star1Empty />}
    </>
  );
}