import React from 'react';
import DefaultNotification from './types/DefaultNotification';
import { NotificationPosition } from './NotificationContainer';
import { useNotificationContainer } from './hook/useNotificationContainer';
import CustomNotification from './types/CustomNotification';
import { parentStyle } from './style/style';
import { ActiveNotificationProvider } from './context/active-notification-context';

export interface INotificationsProps {
    position: NotificationPosition;
    customBody: React.ReactNode;
    exitIconClassName?: string;
    exitIconStroke?: string;
    exitIconHover?: string;
    titleClassName?: string;
    cardClassName?: string;
}

const Notifications = (props: INotificationsProps) => {
    const { position, customBody, exitIconClassName, exitIconStroke, exitIconHover, titleClassName, cardClassName } = props;
    const { notifications, onRequestHide } = useNotificationContainer();
    const defaultBody = <h1>Provide a body</h1>;

    return (
        <div style={parentStyle(position)}>
            {notifications.map((notification) => {
                const key = notification.id || new Date().getTime();
                return notification.type === 'custom' ? (
                    <ActiveNotificationProvider onRequestHide={onRequestHide} currentNotification={notification} key={key}>
                        <CustomNotification
                            customBody={customBody === undefined ? defaultBody : customBody}
                            exitIconClassName={exitIconClassName}
                            exitIconStroke={exitIconStroke}
                            exitIconHover={exitIconHover}
                            cardClassName={cardClassName}
                            autoDismiss={notification.autoDismiss}
                            timeOut={notification.timeOut}
                            onCloseClick={notification.onCloseClick}
                            onRequestHide={() => onRequestHide(notification)}
                        />
                    </ActiveNotificationProvider>
                ) : (
                    <ActiveNotificationProvider onRequestHide={onRequestHide} currentNotification={notification} key={key}>
                        <DefaultNotification
                            showProgress={notification.showProgress}
                            exitIconClassName={exitIconClassName}
                            exitIconStroke={exitIconStroke}
                            exitIconHover={exitIconHover}
                            titleClassName={titleClassName}
                            cardClassName={cardClassName}
                            key={key}
                            autoDismiss={notification.autoDismiss}
                            title={notification.title}
                            message={notification.message}
                            timeOut={notification.timeOut}
                            onCloseClick={notification.onClick}
                            onRequestHide={() => onRequestHide(notification)}
                        />
                    </ActiveNotificationProvider>
                );
            })}
        </div>
    );
};

export default Notifications;
