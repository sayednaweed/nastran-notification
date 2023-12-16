"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActiveNotification = void 0;
const react_1 = require("react");
const active_notification_context_1 = require("../context/active-notification-context");
const useActiveNotification = () => {
    const context = (0, react_1.useContext)(active_notification_context_1.ActiveNotificationContext);
    if (!context) {
        throw new Error("useActiveNotification must be used inside the ActiveNotificationContext");
    }
    const { onNotificationHide } = context;
    return { onNotificationHide };
};
exports.useActiveNotification = useActiveNotification;
//# sourceMappingURL=useActiveNotification.js.map