"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNotificationContainer = void 0;
const react_1 = require("react");
const notification_container_context_1 = require("../context/notification-container-context");
const useNotificationContainer = () => {
    const context = (0, react_1.useContext)(notification_container_context_1.NotificationContainerContext);
    if (!context) {
        throw new Error('useNotification must be used inside the NotificationContext');
    }
    const { handleStoreChange, onRequestHide, notifications } = context;
    return { handleStoreChange, onRequestHide, notifications };
};
exports.useNotificationContainer = useNotificationContainer;
//# sourceMappingURL=useNotificationContainer.js.map