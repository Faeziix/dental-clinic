import clsx from "clsx";

export default function QuoteIcon({ fill = "#372D95", className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="27"
      viewBox="0 0 36 27"
      fill="none"
      className={clsx("ltr:-scale-x-100 ", className)}
      {...props}
    >
      <path
        d="M17.3596 9.85255C17.3596 18.5166 11.9799 23.6769 8.62602 26.0509C8.20126 26.3519 7.74166 25.7264 8.06661 25.2883C9.11237 23.88 10.3323 21.8667 11.1559 19.3287C10.393 19.579 9.60357 19.7055 8.81037 19.7046C4.08828 19.7046 0.260742 15.2938 0.260742 9.85255C0.260742 4.41132 4.08828 0 8.81037 0C13.5325 0 17.3596 4.41084 17.3596 9.85255Z"
        fill={fill}
      />
      <path
        d="M35.7395 9.85255C35.7395 18.5166 30.3598 23.6769 27.0059 26.0509C26.5811 26.3519 26.1215 25.7264 26.4465 25.2883C27.4923 23.88 28.7122 21.8667 29.5358 19.3287C28.7729 19.579 27.9835 19.7055 27.1903 19.7046C22.4682 19.7046 18.6406 15.2938 18.6406 9.85255C18.6406 4.41132 22.4682 0 27.1903 0C31.9123 0 35.7395 4.41084 35.7395 9.85255Z"
        fill={fill}
      />
    </svg>
  );
}
