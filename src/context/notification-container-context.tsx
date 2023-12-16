import React, { createContext, useEffect, useState } from 'react';
import NotificationManager from '../NotificationManager';

interface NotificationContainer {
    handleStoreChange: (notificationItems: any) => Promise<void>;
    onRequestHide: (notificationItem: any) => Promise<void>;
    notifications: any[];
}
const initialState: NotificationContainer = {
    handleStoreChange: async (notificationItems: any) => {},
    onRequestHide: async (notificationItem: any) => {},
    notifications: []
};
export const NotificationContainerContext = createContext<NotificationContainer>(initialState);
export const NotificationContainerProvider = (props: any) => {
    const { children } = props;
    const [notifications, setNotifications] = useState<any>([]);
    useEffect(() => {
        NotificationManager.addChangeListener(handleStoreChange);
        return () => {
            NotificationManager.removeChangeListener(handleStoreChange);
        };
    }, [notifications]);

    const handleStoreChange = async (notificationItems: any) => {
        setNotifications([...notificationItems]);
    };
    const onRequestHide = async (notificationItem: any) => {
        NotificationManager.remove(notificationItem);
    };

    return (
        <NotificationContainerContext.Provider
            value={{
                notifications: notifications,
                onRequestHide: onRequestHide,
                handleStoreChange: handleStoreChange
            }}
        >
            {children}
        </NotificationContainerContext.Provider>
    );
};
