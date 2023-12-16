"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationMessageStyle = exports.notificationTitleStyle = exports.notificationBodyStyle = exports.notificationCardStyle = exports.progressFillStyle = exports.progressUnFillStyle = exports.progressStyle = exports.parentStyle = void 0;
const parentStyle = (condition) => {
    switch (condition) {
        case 'bottom-right':
            return {
                position: 'fixed',
                padding: '0px 4px',
                height: '90vh',
                display: 'flex',
                overflow: 'hidden',
                flexDirection: 'column-reverse',
                right: '16px'
            };
        case 'bottom-left':
            return {
                position: 'fixed',
                padding: '0px 4px',
                height: '90vh',
                display: 'flex',
                overflow: 'hidden',
                flexDirection: 'column-reverse',
                left: '16px'
            };
        case 'top-right':
            return {
                position: 'fixed',
                padding: '0px 4px',
                height: '90vh',
                display: 'flex',
                overflow: 'hidden',
                flexDirection: 'column',
                right: '16px'
            };
        default:
            return {
                position: 'fixed',
                padding: '0px 4px',
                height: '90vh',
                display: 'flex',
                overflow: 'hidden',
                flexDirection: 'column',
                right: '16px',
                rowGap: '8px'
            };
    }
};
exports.parentStyle = parentStyle;
exports.progressStyle = {
    position: 'relative',
    height: '7px'
};
exports.progressUnFillStyle = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    height: '100%',
    width: '100%',
    borderRadius: '9999px'
};
const progressFillStyle = (progress) => {
    return {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        height: '100%',
        background: 'linear-gradient(to left, #F2709C, #FF9472)',
        transition: 'all 1000ms linear',
        width: `${progress}%`
    };
};
exports.progressFillStyle = progressFillStyle;
const notificationCardStyle = (onCardMouseEnter) => {
    return {
        marginTop: '12px',
        position: 'relative',
        minWidth: '300px',
        minHeight: '70px',
        overflow: 'hidden',
        width: '300px',
        borderRadius: '5px',
        background: 'backdrop-filter: blur(10px)',
        boxShadow: onCardMouseEnter ? '0px 0px 8px 0px rgba(0, 0, 0, 0.284)' : '0px 0px 3px 0px rgba(0, 0, 0, 0.284)'
    };
};
exports.notificationCardStyle = notificationCardStyle;
exports.notificationBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: '1',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: `2px 12px 12px 12px`,
    textAlign: 'center'
};
exports.notificationTitleStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: '6px',
    maxWidth: '80%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};
exports.notificationMessageStyle = {
    fontSize: '14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};
//# sourceMappingURL=style.js.map