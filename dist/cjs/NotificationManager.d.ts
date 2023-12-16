/// <reference types="node" />
import { EventEmitter } from 'events';
export type NotificationTypeProps = 'info' | 'success' | 'warning' | 'error';
declare class NotificationManager extends EventEmitter {
    listNotify: any[];
    constructor();
    create(notify: any): void;
    custom(timeOut?: number, onCloseClick?: () => void, autoDismiss?: boolean, priority?: boolean): void;
    info(title?: string, message?: string, timeOut?: number, onCloseClick?: () => void, showProgress?: boolean, autoDismiss?: boolean, priority?: boolean): void;
    remove(notification: any): void;
    removeAll(): void;
    emitChange(): void;
    addChangeListener(callback: any): void;
    removeChangeListener(callback: any): void;
}
declare const _default: NotificationManager;
export default _default;
