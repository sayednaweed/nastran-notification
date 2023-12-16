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
import { CloseIcon } from "../icon/close-icon";
import { notificationBodyStyle, notificationCardStyle } from "../style/style";
const CustomNotification = (props) => {
    const { onRequestHide, onCloseClick, timeOut, exitIconClassName, cardClassName, exitIconStroke, exitIconHover, customBody, autoDismiss, } = props;
    const [onCardMouseEnter, setOnCardMouseEnter] = React.useState(false);
    React.useEffect(() => {
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
    return (React.createElement("div", { className: cardClassName, onMouseEnter: () => setOnCardMouseEnter(true), onMouseLeave: () => setOnCardMouseEnter(false), role: "alert", style: notificationCardStyle(onCardMouseEnter) },
        React.createElement(CloseIcon, { onClick: handleClick, exitIconStroke: exitIconStroke, exitIconHover: exitIconHover, className: exitIconClassName }),
        React.createElement("div", { style: notificationBodyStyle }, customBody)));
};
export default CustomNotification;
//# sourceMappingURL=CustomNotification.js.map