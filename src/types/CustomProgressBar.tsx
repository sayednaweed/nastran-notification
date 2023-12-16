import React from "react";
import {
  progressFillStyle,
  progressStyle,
  progressUnFillStyle,
} from "../style/style";

export interface ICustomProgressBarProps {
  progress: number;
  className?: any;
  style?: any;
}
const CustomProgressBar = (props: ICustomProgressBarProps) => {
  const { progress, className, style } = props;
  const newStyle =
    style === undefined ? progressStyle : Object.assign(style, progressStyle);
  return (
    <>
      {progress > 0 && (
        <div className={className} style={newStyle}>
          <div style={progressUnFillStyle}></div>
          <div style={progressFillStyle(progress)}></div>
        </div>
      )}
    </>
  );
};

export default CustomProgressBar;
