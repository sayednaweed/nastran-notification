import React from 'react';
interface ActiveNotification {
    onNotificationHide: () => Promise<void>;
    notification: any;
}
export declare const ActiveNotificationContext: React.Context<ActiveNotification>;
export interface IActiveNotificationProviderProps {
    children: any;
    currentNotification: any;
    onRequestHide: any;
}
export declare const ActiveNotificationProvider: (props: IActiveNotificationProviderProps) => React.JSX.Element;
export {};
