import { EventEmitter } from 'events';

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
export type NotificationTypeProps = 'info' | 'success' | 'warning' | 'error';

class NotificationManager extends EventEmitter {
    listNotify: any[];
    constructor() {
        super();
        this.listNotify = [];
    }

    create(notify: any) {
        const defaultNotify = {
            id: createUUID()
        };
        if (notify.priority) {
            this.listNotify.unshift(Object.assign(defaultNotify, notify));
        } else {
            this.listNotify.push(Object.assign(defaultNotify, notify));
        }
        this.emitChange();
    }

    custom(timeOut: number = 2, onCloseClick: () => void = () => {}, autoDismiss: boolean = true, priority: boolean = false) {
        this.create({
            type: Constants.CUSTOM,
            timeOut,
            onCloseClick,
            autoDismiss,
            priority
        });
    }

    info(
        title: string = 'Default title',
        message: string = 'Default value.',
        timeOut: number = 2,
        onCloseClick: () => void = () => {},
        showProgress: boolean = true,
        autoDismiss: boolean = true,
        priority: boolean = false
    ) {
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

    remove(notification: any) {
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

    addChangeListener(callback: any) {
        this.addListener(Constants.CHANGE, callback);
    }

    removeChangeListener(callback: any) {
        this.removeListener(Constants.CHANGE, callback);
    }
}

export default new NotificationManager();
