import * as React from "react";

export interface ICloseIconProps {
  onClick: () => Promise<void>;
  exitIconStroke?: string;
  exitIconHover?: string;
  className?: string;
}
export function CloseIcon(props: ICloseIconProps) {
  const { onClick, exitIconStroke, exitIconHover, className } = props;
  const hoverColor = exitIconHover ? exitIconHover : "red";
  const strokeColor = exitIconStroke ? exitIconStroke : "#1C274C";
  const [hover, setHover] = React.useState(false);

  return (
    <svg
      className={className}
      style={{
        alignSelf: "end",
        cursor: "pointer",
        position: "absolute",
        right: "-2px",
        top: "-2px",
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        style={{
          fill: hover ? hoverColor : "transparent",
          transition: "all 500ms ease-in-out",
        }}
        opacity="0.5"
        cx="12"
        cy="11.8"
        r="8"
        stroke={strokeColor}
        strokeWidth="0.3"
      />
      <path
        d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
