import { InternalIconProps } from "../Icon";

export const MapPin: React.FC<InternalIconProps> = ({
  height,
  width,
  fill,
  onMouseEnter,
  onMouseLeave,
  altText,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    height={height}
    width={width}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <title>{altText}</title>
    <path
      fill={fill}
      d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
    ></path>
  </svg>
);
