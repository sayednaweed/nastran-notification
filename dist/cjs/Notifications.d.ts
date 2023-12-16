import React from 'react';
import { NotificationPosition } from './NotificationContainer';
export interface INotificationsProps {
    position: NotificationPosition;
    customBody: React.ReactNode;
    exitIconClassName?: string;
    exitIconStroke?: string;
    exitIconHover?: string;
    titleClassName?: string;
    cardClassName?: string;
}
declare const Notifications: (props: INotificationsProps) => React.JSX.Element;
export default Notifications;
