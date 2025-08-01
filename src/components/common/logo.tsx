export const Logo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="180"
    height="80"
    viewBox="0 0 250 100"
    style={{ fill: "var(--foreground)" }}
    className={className}
  >
    {/* Rectangles */}
    <rect x="10" y="10" width="20" height="70" />
    <rect x="40" y="25" width="15" height="55" />
    <rect x="65" y="35" width="15" height="45" />

    {/* Arch-shape "n" */}
    <path d="M90 35 h15 a15 15 0 0 1 30 0 v45 h-15 v-35 a7.5 7.5 0 0 0 -15 0 v35 h-15 z" />

    {/* Curved text above "n" shape */}
    <defs>
      <path id="curve" d="M95 30 A30 30 0 0 1 145 30" fill="none" />
    </defs>
    <text fontSize="12" fontFamily="sans-serif" letterSpacing="2" fill="var(--foreground)">
      <textPath href="#curve" startOffset="0%">
        LINHDA
      </textPath>
    </text>
  </svg>
);
