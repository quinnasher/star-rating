import { StarContext } from "../../star-context/StarContextProvider.jsx";
import { useContext } from "react";

export default function Star4Full({ isStatic = true, newSize }) {
  const { fillColor, calculateSize } = useContext(StarContext);
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
        <clipPath id="c8f275d508">
          <path d="M 2 1.21875 L 27.941406 1.21875 L 27.941406 27 L 2 27 Z M 2 1.21875 " clipRule="nonzero" />
        </clipPath>
      </defs>
      <g clipPath="url(#c8f275d508)">
        <path fill={fillColor}
              d="M 25.617188 9.167969 L 21.667969 8.003906 C 20.964844 7.796875 20.359375 7.355469 19.945312 6.753906 L 17.613281 3.351562 C 16.355469 1.511719 13.640625 1.511719 12.378906 3.351562 L 10.050781 6.753906 C 9.636719 7.355469 9.027344 7.796875 8.328125 8.003906 L 4.375 9.167969 C 2.238281 9.800781 1.398438 12.382812 2.757812 14.152344 L 5.269531 17.417969 C 5.714844 18 5.949219 18.714844 5.925781 19.441406 L 5.8125 23.5625 C 5.753906 25.792969 7.949219 27.390625 10.050781 26.644531 L 13.933594 25.261719 C 14.621094 25.019531 15.371094 25.019531 16.0625 25.261719 L 19.941406 26.644531 C 22.042969 27.390625 24.242188 25.792969 24.179688 23.5625 L 24.066406 19.441406 C 24.046875 18.714844 24.277344 18 24.722656 17.417969 L 27.238281 14.152344 C 28.597656 12.382812 27.757812 9.800781 25.617188 9.167969 "
              fillOpacity="1"
              fillRule="nonzero" />
      </g>
    </svg>

  );
}