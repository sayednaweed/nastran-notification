import React from "react";
export interface IDefaultNotificationProps {
    title: string;
    message: string;
    timeOut: number;
    autoDismiss: boolean;
    showProgress: boolean;
    onCloseClick: () => void;
    onRequestHide: () => Promise<void>;
    exitIconClassName?: string;
    exitIconStroke?: string;
    exitIconHover?: string;
    titleClassName?: string;
    cardClassName?: string;
}
declare const DefaultNotification: (props: IDefaultNotificationProps) => React.JSX.Element;
export default DefaultNotification;
