"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DefaultNotification_1 = __importDefault(require("./types/DefaultNotification"));
const useNotificationContainer_1 = require("./hook/useNotificationContainer");
const CustomNotification_1 = __importDefault(require("./types/CustomNotification"));
const style_1 = require("./style/style");
const active_notification_context_1 = require("./context/active-notification-context");
const Notifications = (props) => {
    const { position, customBody, exitIconClassName, exitIconStroke, exitIconHover, titleClassName, cardClassName } = props;
    const { notifications, onRequestHide } = (0, useNotificationContainer_1.useNotificationContainer)();
    const defaultBody = react_1.default.createElement("h1", null, "Provide a body");
    return (react_1.default.createElement("div", { style: (0, style_1.parentStyle)(position) }, notifications.map((notification) => {
        const key = notification.id || new Date().getTime();
        return notification.type === 'custom' ? (react_1.default.createElement(active_notification_context_1.ActiveNotificationProvider, { onRequestHide: onRequestHide, currentNotification: notification, key: key },
            react_1.default.createElement(CustomNotification_1.default, { customBody: customBody === undefined ? defaultBody : customBody, exitIconClassName: exitIconClassName, exitIconStroke: exitIconStroke, exitIconHover: exitIconHover, cardClassName: cardClassName, autoDismiss: notification.autoDismiss, timeOut: notification.timeOut, onCloseClick: notification.onCloseClick, onRequestHide: () => onRequestHide(notification) }))) : (react_1.default.createElement(active_notification_context_1.ActiveNotificationProvider, { onRequestHide: onRequestHide, currentNotification: notification, key: key },
            react_1.default.createElement(DefaultNotification_1.default, { showProgress: notification.showProgress, exitIconClassName: exitIconClassName, exitIconStroke: exitIconStroke, exitIconHover: exitIconHover, titleClassName: titleClassName, cardClassName: cardClassName, key: key, autoDismiss: notification.autoDismiss, title: notification.title, message: notification.message, timeOut: notification.timeOut, onCloseClick: notification.onClick, onRequestHide: () => onRequestHide(notification) })));
    })));
};
exports.default = Notifications;
//# sourceMappingURL=Notifications.js.map