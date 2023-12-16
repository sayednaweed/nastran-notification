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
const CustomProgressBar_1 = __importDefault(require("./CustomProgressBar"));
const close_icon_1 = require("../icon/close-icon");
const style_1 = require("../style/style");
const DefaultNotification = (props) => {
    const { onRequestHide, onCloseClick, timeOut, exitIconClassName, cardClassName, exitIconStroke, exitIconHover, title, titleClassName, message, autoDismiss, showProgress, } = props;
    const [onCardMouseEnter, setOnCardMouseEnter] = react_1.default.useState(false);
    const [progress, setProgress] = react_1.default.useState(0);
    const [complete, setComplete] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        let outerTimer;
        const sleep = (seconds) => __awaiter(void 0, void 0, void 0, function* () {
            let innerTimer;
            yield new Promise((resolve) => (innerTimer = setTimeout(resolve, seconds * 1000)));
            clearTimeout(innerTimer);
        });
        const animate = () => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0.1; i <= 100 + 0.1; i += 100 / timeOut) {
                if (complete)
                    return;
                setProgress(i);
                yield sleep(1);
            }
            yield sleep(0.1);
            // Remove notification
            if (autoDismiss)
                requestHide();
        });
        const onlyDismiss = () => {
            outerTimer = setTimeout(() => {
                requestHide();
            }, timeOut * 1000);
        };
        // show progress
        if (showProgress)
            animate();
        else if (autoDismiss)
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
        setComplete(true);
        requestHide();
    });
    const body = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: style_1.notificationBodyStyle },
            react_1.default.createElement("h1", { style: style_1.notificationTitleStyle, className: titleClassName }, title),
            react_1.default.createElement("h4", { style: style_1.notificationMessageStyle }, message)),
        showProgress ? react_1.default.createElement(CustomProgressBar_1.default, { progress: progress }) : null));
    return (react_1.default.createElement("div", { className: cardClassName, onMouseEnter: () => setOnCardMouseEnter(true), onMouseLeave: () => setOnCardMouseEnter(false), role: "alert", style: (0, style_1.notificationCardStyle)(onCardMouseEnter) },
        react_1.default.createElement(close_icon_1.CloseIcon, { onClick: handleClick, exitIconStroke: exitIconStroke, exitIconHover: exitIconHover, className: exitIconClassName }),
        body));
};
exports.default = DefaultNotification;
//# sourceMappingURL=DefaultNotification.js.map