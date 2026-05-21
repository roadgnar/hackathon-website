/* Lucide-style outline icons, hand-inlined so we don't ship a dep.
   2px stroke, 24x24 viewBox, currentColor, rounded caps/joins. */

const _SVG = ({ children, size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const IconArrowRight = (p) => (
  <_SVG {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </_SVG>
);
const IconArrowUpRight = (p) => (
  <_SVG {...p}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </_SVG>
);
const IconMapPin = (p) => (
  <_SVG {...p}>
    <path d="M20 10c0 7-8 13-8 13S4 17 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </_SVG>
);
const IconCalendar = (p) => (
  <_SVG {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </_SVG>
);
const IconClock = (p) => (
  <_SVG {...p}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </_SVG>
);
const IconUsers = (p) => (
  <_SVG {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </_SVG>
);
const IconTrophy = (p) => (
  <_SVG {...p}>
    <path d="M6 4h12v4a6 6 0 0 1-12 0V4z" />
    <path d="M6 4H3v2a3 3 0 0 0 3 3" />
    <path d="M18 4h3v2a3 3 0 0 1-3 3" />
    <line x1="12" y1="14" x2="12" y2="18" />
    <path d="M8 22h8" />
    <path d="M10 18h4v4h-4z" />
  </_SVG>
);

window.Icons = {
  ArrowRight: IconArrowRight,
  ArrowUpRight: IconArrowUpRight,
  MapPin: IconMapPin,
  Calendar: IconCalendar,
  Clock: IconClock,
  Users: IconUsers,
  Trophy: IconTrophy,
};
