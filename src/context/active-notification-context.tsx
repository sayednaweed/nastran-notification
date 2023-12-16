import React, { createContext, useState } from 'react';

interface ActiveNotification {
    onNotificationHide: () => Promise<void>;
    notification: any;
}
const initialState: ActiveNotification = {
    onNotificationHide: async () => {},
    notification: {}
};
export const ActiveNotificationContext = createContext<ActiveNotification>(initialState);

export interface IActiveNotificationProviderProps {
    children: any;
    currentNotification: any;
    onRequestHide: any;
}
export const ActiveNotificationProvider = (props: IActiveNotificationProviderProps) => {
    const { children, currentNotification, onRequestHide } = props;
    const [notification] = useState<any>(currentNotification);
    const onNotificationHide = async () => {
        onRequestHide(notification);
    };

    return (
        <ActiveNotificationContext.Provider
            value={{
                notification: notification,
                onNotificationHide: onNotificationHide
            }}
        >
            {children}
        </ActiveNotificationContext.Provider>
    );
};
