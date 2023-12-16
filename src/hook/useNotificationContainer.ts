import { useContext } from 'react';
import { NotificationContainerContext } from '../context/notification-container-context';

export const useNotificationContainer = () => {
    const context = useContext(NotificationContainerContext);

    if (!context) {
        throw new Error('useNotification must be used inside the NotificationContext');
    }
    const { handleStoreChange, onRequestHide, notifications } = context;
    return { handleStoreChange, onRequestHide, notifications };
};
