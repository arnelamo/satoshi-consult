import { InternalIconProps } from "../Icon";

export const Info: React.FC<InternalIconProps> = ({
  height,
  width,
  fill,
  onMouseEnter,
  onMouseLeave,
  altText,
}) => (
  <svg
    height={height}
    width={width}
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={fill}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <title>{altText}</title>
    <path
      d="M12 11.5V16.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 7.51L12.01 7.49889"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
