var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { createContext, useEffect, useState } from 'react';
import NotificationManager from '../NotificationManager';
const initialState = {
    handleStoreChange: (notificationItems) => __awaiter(void 0, void 0, void 0, function* () { }),
    onRequestHide: (notificationItem) => __awaiter(void 0, void 0, void 0, function* () { }),
    notifications: []
};
export const NotificationContainerContext = createContext(initialState);
export const NotificationContainerProvider = (props) => {
    const { children } = props;
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        NotificationManager.addChangeListener(handleStoreChange);
        return () => {
            NotificationManager.removeChangeListener(handleStoreChange);
        };
    }, [notifications]);
    const handleStoreChange = (notificationItems) => __awaiter(void 0, void 0, void 0, function* () {
        setNotifications([...notificationItems]);
    });
    const onRequestHide = (notificationItem) => __awaiter(void 0, void 0, void 0, function* () {
        NotificationManager.remove(notificationItem);
    });
    return (React.createElement(NotificationContainerContext.Provider, { value: {
            notifications: notifications,
            onRequestHide: onRequestHide,
            handleStoreChange: handleStoreChange
        } }, children));
};
//# sourceMappingURL=notification-container-context.js.map