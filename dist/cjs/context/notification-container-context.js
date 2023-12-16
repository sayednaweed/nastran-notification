"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationContainerProvider = exports.NotificationContainerContext = void 0;
const react_1 = __importStar(require("react"));
const NotificationManager_1 = __importDefault(require("../NotificationManager"));
const initialState = {
    handleStoreChange: (notificationItems) => __awaiter(void 0, void 0, void 0, function* () { }),
    onRequestHide: (notificationItem) => __awaiter(void 0, void 0, void 0, function* () { }),
    notifications: []
};
exports.NotificationContainerContext = (0, react_1.createContext)(initialState);
const NotificationContainerProvider = (props) => {
    const { children } = props;
    const [notifications, setNotifications] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        NotificationManager_1.default.addChangeListener(handleStoreChange);
        return () => {
            NotificationManager_1.default.removeChangeListener(handleStoreChange);
        };
    }, [notifications]);
    const handleStoreChange = (notificationItems) => __awaiter(void 0, void 0, void 0, function* () {
        setNotifications([...notificationItems]);
    });
    const onRequestHide = (notificationItem) => __awaiter(void 0, void 0, void 0, function* () {
        NotificationManager_1.default.remove(notificationItem);
    });
    return (react_1.default.createElement(exports.NotificationContainerContext.Provider, { value: {
            notifications: notifications,
            onRequestHide: onRequestHide,
            handleStoreChange: handleStoreChange
        } }, children));
};
exports.NotificationContainerProvider = NotificationContainerProvider;
//# sourceMappingURL=notification-container-context.js.map