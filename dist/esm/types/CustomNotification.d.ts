import React from "react";
export interface ICustomNotificationProps {
    customBody: any;
    timeOut: number;
    autoDismiss: boolean;
    onCloseClick: () => void;
    onRequestHide: () => Promise<void>;
    exitIconClassName?: string;
    exitIconStroke?: string;
    exitIconHover?: string;
    cardClassName?: string;
}
declare const CustomNotification: (props: ICustomNotificationProps) => React.JSX.Element;
export default CustomNotification;
