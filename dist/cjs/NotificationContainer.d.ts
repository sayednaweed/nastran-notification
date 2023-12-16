import React from "react";
export type NotificationPosition = "top-right" | "bottom-right" | "bottom-left" | null;
export interface INotificationContainerProps {
    children?: React.ReactNode;
    position: NotificationPosition;
    exitIconClassName?: string;
    exitIconStroke?: string;
    exitIconHover?: string;
    titleClassName?: string;
    cardClassName?: string;
}
declare const NotificationContainer: (props: INotificationContainerProps) => React.JSX.Element;
export default NotificationContainer;
