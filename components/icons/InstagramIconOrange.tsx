import React from "react";

function InstagramIconOrange({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <rect x="0.5" y="0.5" width="18" height="18" rx="3.5" stroke="#EB712E" />
      <circle cx="9.5" cy="9.5" r="4.25" stroke="#EB712E" />
      <circle cx="14.5469" cy="3.85938" r="0.890625" fill="#EB712E" />
    </svg>
  );
}

export default InstagramIconOrange;
