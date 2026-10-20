export default function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="MamaNutri Guide logo">
      <path
        d="M24 41C10 31 6 22 10 15c3-5 10-5 14 1 4-6 11-6 14-1 4 7 0 16-14 26z"
        fill="none"
        stroke="#e0a63a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M24 34c-6-6-5-13 2-15 3 6 2 11-2 15z" fill="#3f9b6b" />
      <path d="M24 34c0-5 1-9 2-15" stroke="#fdfaf3" strokeWidth="1" fill="none" />
    </svg>
  );
}
