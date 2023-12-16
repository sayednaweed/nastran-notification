"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseIcon = void 0;
const React = __importStar(require("react"));
function CloseIcon(props) {
    const { onClick, exitIconStroke, exitIconHover, className } = props;
    const hoverColor = exitIconHover ? exitIconHover : "red";
    const strokeColor = exitIconStroke ? exitIconStroke : "#1C274C";
    const [hover, setHover] = React.useState(false);
    return (React.createElement("svg", { className: className, style: {
            alignSelf: "end",
            cursor: "pointer",
            position: "absolute",
            right: "-2px",
            top: "-2px",
        }, onClick: onClick, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), width: "32px", height: "32px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { style: {
                fill: hover ? hoverColor : "transparent",
                transition: "all 500ms ease-in-out",
            }, opacity: "0.5", cx: "12", cy: "11.8", r: "8", stroke: strokeColor, strokeWidth: "0.3" }),
        React.createElement("path", { d: "M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5", stroke: strokeColor, strokeWidth: "1.5", strokeLinecap: "round" })));
}
exports.CloseIcon = CloseIcon;
//# sourceMappingURL=close-icon.js.map