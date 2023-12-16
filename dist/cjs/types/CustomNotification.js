"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const close_icon_1 = require("../icon/close-icon");
const style_1 = require("../style/style");
const CustomNotification = (props) => {
    const { onRequestHide, onCloseClick, timeOut, exitIconClassName, cardClassName, exitIconStroke, exitIconHover, customBody, autoDismiss, } = props;
    const [onCardMouseEnter, setOnCardMouseEnter] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        let outerTimer;
        const onlyDismiss = () => {
            outerTimer = setTimeout(() => {
                requestHide();
            }, timeOut * 1000);
        };
        if (autoDismiss)
            onlyDismiss();
        return () => {
            if (outerTimer == null || outerTimer == undefined)
                clearTimeout(outerTimer);
        };
    }, []);
    const requestHide = () => {
        if (onRequestHide) {
            onRequestHide();
        }
    };
    const handleClick = () => __awaiter(void 0, void 0, void 0, function* () {
        if (onCloseClick) {
            onCloseClick();
        }
        requestHide();
    });
    return (react_1.default.createElement("div", { className: cardClassName, onMouseEnter: () => setOnCardMouseEnter(true), onMouseLeave: () => setOnCardMouseEnter(false), role: "alert", style: (0, style_1.notificationCardStyle)(onCardMouseEnter) },
        react_1.default.createElement(close_icon_1.CloseIcon, { onClick: handleClick, exitIconStroke: exitIconStroke, exitIconHover: exitIconHover, className: exitIconClassName }),
        react_1.default.createElement("div", { style: style_1.notificationBodyStyle }, customBody)));
};
exports.default = CustomNotification;
//# sourceMappingURL=CustomNotification.js.map