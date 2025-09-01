import React, { forwardRef } from "react";

function DefaultImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      role="img"
      aria-label="Placeholder image"
      className="w-full h-full rounded-2xl border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-200"
    >
      <g transform="translate(200 140)" className="stroke-gray-400">
        <rect x="-40" y="-28" width="80" height="56" rx="6" className="fill-none stroke-2" />
        {/* <circle cx="-15" cy="-8" r="8" className="fill-none stroke-2" /> */}
        <path
          d="M-32 12 L-12 -8 L3 7 L14 -4 L32 20"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-none stroke-2"
        />
      </g>
      <text x="200" y="235" textAnchor="middle" className="fill-gray-400 text-sm font-medium">
        No image
      </text>
    </svg>
  );
}

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: React.ReactNode; // optional custom fallback
};

const Image = forwardRef<HTMLImageElement, ImgProps>(function Image(
  { src, alt, className, fallback, ...rest },
  ref
) {
  if (src) {
    return <img ref={ref} src={src} alt={alt ?? ""} className={className} {...rest} />;
  }
  return <div className={className ?? "h-full w-full"}>{fallback ?? <DefaultImage />}</div>;
});

export default Image;
