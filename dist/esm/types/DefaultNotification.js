var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from "react";
import CustomProgressBar from "./CustomProgressBar";
import { CloseIcon } from "../icon/close-icon";
import { notificationBodyStyle, notificationCardStyle, notificationMessageStyle, notificationTitleStyle, } from "../style/style";
const DefaultNotification = (props) => {
    const { onRequestHide, onCloseClick, timeOut, exitIconClassName, cardClassName, exitIconStroke, exitIconHover, title, titleClassName, message, autoDismiss, showProgress, } = props;
    const [onCardMouseEnter, setOnCardMouseEnter] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [complete, setComplete] = React.useState(false);
    React.useEffect(() => {
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
    const body = (React.createElement(React.Fragment, null,
        React.createElement("div", { style: notificationBodyStyle },
            React.createElement("h1", { style: notificationTitleStyle, className: titleClassName }, title),
            React.createElement("h4", { style: notificationMessageStyle }, message)),
        showProgress ? React.createElement(CustomProgressBar, { progress: progress }) : null));
    return (React.createElement("div", { className: cardClassName, onMouseEnter: () => setOnCardMouseEnter(true), onMouseLeave: () => setOnCardMouseEnter(false), role: "alert", style: notificationCardStyle(onCardMouseEnter) },
        React.createElement(CloseIcon, { onClick: handleClick, exitIconStroke: exitIconStroke, exitIconHover: exitIconHover, className: exitIconClassName }),
        body));
};
export default DefaultNotification;
//# sourceMappingURL=DefaultNotification.js.map