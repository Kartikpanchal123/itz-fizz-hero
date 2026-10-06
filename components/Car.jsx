export default function Car() {
  return (
    <svg className="car" viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="beam" x1="0" x2="1">
          <stop offset="0" stopColor="#fff3bf" stopOpacity="0.6" />
          <stop offset="1" stopColor="#fff3bf" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="384,68 720,10 720,126" fill="url(#beam)" />
      <ellipse cx="200" cy="121" rx="175" ry="6" fill="rgba(0,0,0,.4)" />
      <path fill="#f4efe6" d="M20 90V72Q22 62 40 58L100 50L135 24Q140 20 150 20H250Q262 20 270 28L300 52L360 60Q382 64 384 80V90Z" />
      <path fill="#19c3b1" d="M24 78H380V84H24Z" />
      <path fill="#7fe7dc" d="M142 49L160 28H205V49Z" />
      <path fill="#7fe7dc" d="M214 49V28H250L280 49Z" />
      <rect x="372" y="64" width="12" height="8" rx="3" fill="#fff3bf" />
      <rect x="20" y="64" width="8" height="8" rx="2" fill="#ff4d6d" />
      <path fill="#0e0a24" d="M69 90A31 31 0 0 1 131 90Z" />
      <path fill="#0e0a24" d="M269 90A31 31 0 0 1 331 90Z" />
      {[100, 300].map((cx) => (
        <g key={cx} className="wheel" data-c={`${cx} 94`}>
          <circle cx={cx} cy="94" r="26" fill="#151b20" />
          <circle cx={cx} cy="94" r="15" fill="#d9d2c5" />
          <path d={`M${cx - 13} 94H${cx + 13}M${cx} 81V107M${cx - 9} 85L${cx + 9} 103M${cx + 9} 85L${cx - 9} 103`} stroke="#7a7266" strokeWidth="2.5" />
          <circle cx={cx} cy="94" r="4" fill="#151b20" />
        </g>
      ))}
    </svg>
  );
}
