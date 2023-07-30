import React from "react";

function ArrowRight({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      {...props}
    >
      <rect
        width="10.1444"
        height="2.54845"
        rx="1.27422"
        transform="matrix(0.748161 0.663517 -0.748161 0.663517 2.0293 0)"
        fill="#FAF1FF"
      />
      <rect
        width="10.1444"
        height="2.54845"
        rx="1.27422"
        transform="matrix(0.748161 -0.663517 0.748161 0.663517 0 11.9922)"
        fill="#FAF1FF"
      />
    </svg>
  );
}

export default ArrowRight;
