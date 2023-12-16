export declare const useNotificationContainer: () => {
    handleStoreChange: (notificationItems: any) => Promise<void>;
    onRequestHide: (notificationItem: any) => Promise<void>;
    notifications: any[];
};
