import React from 'react';
interface NotificationContainer {
    handleStoreChange: (notificationItems: any) => Promise<void>;
    onRequestHide: (notificationItem: any) => Promise<void>;
    notifications: any[];
}
export declare const NotificationContainerContext: React.Context<NotificationContainer>;
export declare const NotificationContainerProvider: (props: any) => React.JSX.Element;
export {};
