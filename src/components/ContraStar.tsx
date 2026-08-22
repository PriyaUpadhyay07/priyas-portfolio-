import { SVGProps } from "react";

/** Official Contra star mark (4-pointed sparkle), uses currentColor. */
export const ContraStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d="M10.5 0L9.93168 2.85907C9.22181 6.4302 6.4302 9.22181 2.85907 9.93168L0 10.5V13.5L2.85907 14.0683C6.43019 14.7782 9.22181 17.5698 9.93168 21.1409L10.5 24H13.5L14.0683 21.1409C14.7782 17.5698 17.5698 14.7782 21.1409 14.0683L24 13.5V10.5L21.1409 9.93168C17.5698 9.22181 14.7782 6.4302 14.0683 2.85907L13.5 0H10.5Z" />
  </svg>
);
