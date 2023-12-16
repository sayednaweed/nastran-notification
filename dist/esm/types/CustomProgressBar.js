import React from "react";
import { progressFillStyle, progressStyle, progressUnFillStyle, } from "../style/style";
const CustomProgressBar = (props) => {
    const { progress, className, style } = props;
    const newStyle = style === undefined ? progressStyle : Object.assign(style, progressStyle);
    return (React.createElement(React.Fragment, null, progress > 0 && (React.createElement("div", { className: className, style: newStyle },
        React.createElement("div", { style: progressUnFillStyle }),
        React.createElement("div", { style: progressFillStyle(progress) })))));
};
export default CustomProgressBar;
//# sourceMappingURL=CustomProgressBar.js.map