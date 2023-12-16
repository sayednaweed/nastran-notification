"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Notifications_1 = __importDefault(require("./Notifications"));
const notification_container_context_1 = require("./context/notification-container-context");
const NotificationContainer = (props) => {
    const { children, position, exitIconClassName, exitIconStroke, exitIconHover, titleClassName, cardClassName, } = props;
    return (react_1.default.createElement(notification_container_context_1.NotificationContainerProvider, null,
        react_1.default.createElement(Notifications_1.default, { exitIconClassName: exitIconClassName, exitIconStroke: exitIconStroke, exitIconHover: exitIconHover, titleClassName: titleClassName, cardClassName: cardClassName, position: position, customBody: children })));
};
exports.default = NotificationContainer;
//# sourceMappingURL=NotificationContainer.js.map