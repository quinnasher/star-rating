import { useContext } from "react";
import { StarContext } from "../../star-context/StarContextProvider.jsx";

export default function Star3Empty({ isStatic = true, newSize }) {
  const {
    calculateSize,
    strokeColor
  } = useContext(StarContext);
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         width={calculateSize(isStatic, newSize)}
         zoomAndPan="magnify"
         viewBox="0 0 30 30.000001"
         height={calculateSize(isStatic, newSize)}
         preserveAspectRatio="xMidYMid meet"
         version="1.0">
      <defs>
        <clipPath id="06205144d7">
          <path d="M 1.261719 1.453125 L 28.839844 1.453125 L 28.839844 27.578125 L 1.261719 27.578125 Z M 1.261719 1.453125 "
                clipRule="nonzero" />
        </clipPath>
      </defs>
      <g clipPath="url(#06205144d7)">
        <path fill="none"
              d="M 15.050781 1.453125 L 19.3125 10.050781 L 28.839844 11.429688 L 21.945312 18.125 L 23.574219 27.574219 L 15.050781 23.113281 L 6.527344 27.574219 L 8.15625 18.125 L 1.261719 11.429688 L 10.789062 10.050781 L 15.050781 1.453125 "
              fillOpacity="1"
              fillRule="nonzero" />
      </g>
      <path fill="#ffffff"
            d="M 15.050781 20.953125 L 21.347656 24.25 L 20.148438 17.265625 L 25.242188 12.320312 L 18.199219 11.300781 L 15.050781 4.945312 L 11.902344 11.300781 L 4.859375 12.320312 L 9.957031 17.265625 L 8.753906 24.25 Z M 7.714844 25.675781 L 9.113281 17.539062 L 3.175781 11.773438 L 11.382812 10.585938 L 15.050781 3.183594 L 18.71875 10.585938 L 26.925781 11.773438 L 20.988281 17.539062 L 22.390625 25.675781 L 15.050781 21.832031 L 7.714844 25.675781 "
            fillOpacity="1"
            fillRule="nonzero" />
      <path fill={strokeColor}
            d="M 15.050781 20.953125 L 21.347656 24.25 L 20.148438 17.265625 L 25.242188 12.320312 L 18.199219 11.300781 L 15.050781 4.945312 L 11.902344 11.300781 L 4.859375 12.320312 L 9.957031 17.265625 L 8.753906 24.25 Z M 7.714844 25.675781 L 9.113281 17.539062 L 3.175781 11.773438 L 11.382812 10.585938 L 15.050781 3.183594 L 18.71875 10.585938 L 26.925781 11.773438 L 20.988281 17.539062 L 22.390625 25.675781 L 15.050781 21.832031 L 7.714844 25.675781 "
            fillOpacity="1"
            fillRule="nonzero" />
    </svg>
  );
}