import React from "react";
import Notifications from "./Notifications";
import { NotificationContainerProvider } from "./context/notification-container-context";
const NotificationContainer = (props) => {
    const { children, position, exitIconClassName, exitIconStroke, exitIconHover, titleClassName, cardClassName, } = props;
    return (React.createElement(NotificationContainerProvider, null,
        React.createElement(Notifications, { exitIconClassName: exitIconClassName, exitIconStroke: exitIconStroke, exitIconHover: exitIconHover, titleClassName: titleClassName, cardClassName: cardClassName, position: position, customBody: children })));
};
export default NotificationContainer;
//# sourceMappingURL=NotificationContainer.js.map