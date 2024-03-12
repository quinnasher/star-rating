export default function Star({ size, starIcon, onMouseLeave, onMouseEnter, onClick }) {
  const starStyle = {
    width: size + "rem",
    height: size + "rem",
    cursor: "pointer",
    display: "block"
  };

  return (
    <span style={starStyle}
          role={"button"}
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
    >
      {starIcon}
    </span>
  );
}