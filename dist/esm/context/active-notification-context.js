var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { createContext, useState } from 'react';
const initialState = {
    onNotificationHide: () => __awaiter(void 0, void 0, void 0, function* () { }),
    notification: {}
};
export const ActiveNotificationContext = createContext(initialState);
export const ActiveNotificationProvider = (props) => {
    const { children, currentNotification, onRequestHide } = props;
    const [notification] = useState(currentNotification);
    const onNotificationHide = () => __awaiter(void 0, void 0, void 0, function* () {
        onRequestHide(notification);
    });
    return (React.createElement(ActiveNotificationContext.Provider, { value: {
            notification: notification,
            onNotificationHide: onNotificationHide
        } }, children));
};
//# sourceMappingURL=active-notification-context.js.map