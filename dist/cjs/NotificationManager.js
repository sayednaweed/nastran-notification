"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const createUUID = () => {
    const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return pattern.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
const Constants = {
    CHANGE: 'change',
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    CUSTOM: 'custom'
};
class NotificationManager extends events_1.EventEmitter {
    constructor() {
        super();
        this.listNotify = [];
    }
    create(notify) {
        const defaultNotify = {
            id: createUUID()
        };
        if (notify.priority) {
            this.listNotify.unshift(Object.assign(defaultNotify, notify));
        }
        else {
            this.listNotify.push(Object.assign(defaultNotify, notify));
        }
        this.emitChange();
    }
    custom(timeOut = 2, onCloseClick = () => { }, autoDismiss = true, priority = false) {
        this.create({
            type: Constants.CUSTOM,
            timeOut,
            onCloseClick,
            autoDismiss,
            priority
        });
    }
    info(title = 'Default title', message = 'Default value.', timeOut = 2, onCloseClick = () => { }, showProgress = true, autoDismiss = true, priority = false) {
        this.create({
            type: Constants.INFO,
            message: message,
            title: title,
            timeOut: timeOut,
            onCloseClick: onCloseClick,
            showProgress: showProgress,
            autoDismiss: autoDismiss,
            priority: priority
        });
    }
    // success(message, title, timeOut, onClick, priority) {
    //   this.create({
    //     type: Constants.SUCCESS,
    //     message,
    //     title,
    //     timeOut,
    //     onClick,
    //     priority,
    //   });
    // }
    // warning(message, title, timeOut, onClick, priority) {
    //   this.create({
    //     type: Constants.WARNING,
    //     message,
    //     title,
    //     timeOut,
    //     onClick,
    //     priority,
    //   });
    // }
    // error(message, title, timeOut, onClick, priority) {
    //   this.create({
    //     type: Constants.ERROR,
    //     message,
    //     title,
    //     timeOut,
    //     onClick,
    //     priority,
    //   });
    // }
    remove(notification) {
        this.listNotify = this.listNotify.filter((n) => notification.id !== n.id);
        this.emitChange();
    }
    removeAll() {
        this.listNotify.length = 0;
        this.emitChange();
    }
    emitChange() {
        this.emit(Constants.CHANGE, this.listNotify);
    }
    addChangeListener(callback) {
        this.addListener(Constants.CHANGE, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(Constants.CHANGE, callback);
    }
}
exports.default = new NotificationManager();
//# sourceMappingURL=NotificationManager.js.map