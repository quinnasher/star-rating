import { useContext } from "react";
import { StarContext } from "../../star-context/StarContextProvider.jsx";

export default function Star4Empty({ isStatic = true, newSize }) {
  const { strokeColor, calculateSize } = useContext(StarContext);
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
        <clipPath id="ab3a7447c8">
          <path d="M 1.277344 1.582031 L 28.570312 1.582031 L 28.570312 27.582031 L 1.277344 27.582031 Z M 1.277344 1.582031 "
                clipRule="nonzero" />
        </clipPath>
      </defs>
      <g clipPath="url(#ab3a7447c8)">
        <path fill={strokeColor}
              d="M 26.050781 13.683594 L 23.601562 16.863281 C 23.027344 17.601562 22.730469 18.523438 22.753906 19.453125 L 22.867188 23.464844 C 22.882812 24.171875 22.566406 24.816406 21.992188 25.230469 C 21.417969 25.644531 20.707031 25.75 20.035156 25.511719 L 16.246094 24.167969 C 15.804688 24.011719 15.34375 23.933594 14.878906 23.933594 C 14.417969 23.933594 13.953125 24.011719 13.511719 24.167969 L 9.722656 25.511719 C 9.054688 25.75 8.339844 25.644531 7.765625 25.230469 C 7.195312 24.816406 6.875 24.171875 6.894531 23.464844 L 7.003906 19.453125 C 7.03125 18.523438 6.730469 17.601562 6.160156 16.863281 L 3.707031 13.683594 C 3.277344 13.125 3.152344 12.414062 3.371094 11.742188 C 3.589844 11.070312 4.109375 10.566406 4.789062 10.367188 L 8.648438 9.234375 C 9.542969 8.972656 10.328125 8.402344 10.859375 7.632812 L 13.132812 4.324219 C 13.53125 3.742188 14.171875 3.40625 14.878906 3.40625 C 15.589844 3.40625 16.226562 3.742188 16.628906 4.324219 L 18.902344 7.632812 C 19.429688 8.402344 20.21875 8.972656 21.113281 9.234375 L 24.972656 10.367188 C 25.652344 10.566406 26.167969 11.070312 26.386719 11.742188 C 26.605469 12.414062 26.484375 13.125 26.050781 13.683594 Z M 25.527344 8.492188 L 21.667969 7.359375 C 21.203125 7.222656 20.792969 6.925781 20.519531 6.527344 L 18.246094 3.21875 C 17.484375 2.113281 16.226562 1.453125 14.878906 1.453125 C 13.535156 1.453125 12.277344 2.113281 11.515625 3.21875 L 9.242188 6.527344 C 8.964844 6.925781 8.558594 7.222656 8.09375 7.359375 L 4.234375 8.492188 C 2.941406 8.871094 1.921875 9.863281 1.507812 11.140625 C 1.089844 12.414062 1.332031 13.8125 2.15625 14.875 L 4.609375 18.054688 C 4.902344 18.4375 5.058594 18.914062 5.046875 19.402344 L 4.933594 23.410156 C 4.898438 24.75 5.527344 26.023438 6.613281 26.8125 C 7.703125 27.601562 9.113281 27.804688 10.378906 27.351562 L 14.167969 26.007812 C 14.628906 25.847656 15.132812 25.847656 15.589844 26.007812 L 19.378906 27.351562 C 19.824219 27.511719 20.289062 27.589844 20.746094 27.589844 C 21.597656 27.589844 22.4375 27.324219 23.144531 26.8125 C 24.234375 26.023438 24.863281 24.75 24.824219 23.410156 L 24.714844 19.402344 C 24.699219 18.914062 24.855469 18.4375 25.152344 18.054688 L 27.605469 14.875 C 28.425781 13.8125 28.667969 12.414062 28.253906 11.140625 C 27.835938 9.863281 26.816406 8.871094 25.527344 8.492188 "
              fillOpacity="1"
              fillRule="nonzero" />
      </g>
    </svg>
  );
}