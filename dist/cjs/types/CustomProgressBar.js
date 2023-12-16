"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_1 = require("../style/style");
const CustomProgressBar = (props) => {
    const { progress, className, style } = props;
    const newStyle = style === undefined ? style_1.progressStyle : Object.assign(style, style_1.progressStyle);
    return (react_1.default.createElement(react_1.default.Fragment, null, progress > 0 && (react_1.default.createElement("div", { className: className, style: newStyle },
        react_1.default.createElement("div", { style: style_1.progressUnFillStyle }),
        react_1.default.createElement("div", { style: (0, style_1.progressFillStyle)(progress) })))));
};
exports.default = CustomProgressBar;
//# sourceMappingURL=CustomProgressBar.js.map