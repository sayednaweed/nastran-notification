import React from 'react';
import DefaultNotification from './types/DefaultNotification';
import { useNotificationContainer } from './hook/useNotificationContainer';
import CustomNotification from './types/CustomNotification';
import { parentStyle } from './style/style';
import { ActiveNotificationProvider } from './context/active-notification-context';
const Notifications = (props) => {
    const { position, customBody, exitIconClassName, exitIconStroke, exitIconHover, titleClassName, cardClassName } = props;
    const { notifications, onRequestHide } = useNotificationContainer();
    const defaultBody = React.createElement("h1", null, "Provide a body");
    return (React.createElement("div", { style: parentStyle(position) }, notifications.map((notification) => {
        const key = notification.id || new Date().getTime();
        return notification.type === 'custom' ? (React.createElement(ActiveNotificationProvider, { onRequestHide: onRequestHide, currentNotification: notification, key: key },
            React.createElement(CustomNotification, { customBody: customBody === undefined ? defaultBody : customBody, exitIconClassName: exitIconClassName, exitIconStroke: exitIconStroke, exitIconHover: exitIconHover, cardClassName: cardClassName, autoDismiss: notification.autoDismiss, timeOut: notification.timeOut, onCloseClick: notification.onCloseClick, onRequestHide: () => onRequestHide(notification) }))) : (React.createElement(ActiveNotificationProvider, { onRequestHide: onRequestHide, currentNotification: notification, key: key },
            React.createElement(DefaultNotification, { showProgress: notification.showProgress, exitIconClassName: exitIconClassName, exitIconStroke: exitIconStroke, exitIconHover: exitIconHover, titleClassName: titleClassName, cardClassName: cardClassName, key: key, autoDismiss: notification.autoDismiss, title: notification.title, message: notification.message, timeOut: notification.timeOut, onCloseClick: notification.onClick, onRequestHide: () => onRequestHide(notification) })));
    })));
};
export default Notifications;
//# sourceMappingURL=Notifications.js.map