import React from "react";
export interface ICustomProgressBarProps {
    progress: number;
    className?: any;
    style?: any;
}
declare const CustomProgressBar: (props: ICustomProgressBarProps) => React.JSX.Element;
export default CustomProgressBar;
