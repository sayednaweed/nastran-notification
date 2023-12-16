export const parentStyle: any = (condition: any) => {
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

export const progressStyle: any = {
    position: 'relative',
    height: '7px'
};
export const progressUnFillStyle: any = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    height: '100%',
    width: '100%',
    borderRadius: '9999px'
};
export const progressFillStyle: any = (progress: any) => {
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

export const notificationCardStyle: any = (onCardMouseEnter: any) => {
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
export const notificationBodyStyle: any = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: '1',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: `2px 12px 12px 12px`,
    textAlign: 'center'
};

export const notificationTitleStyle: any = {
    fontSize: '15px',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: '6px',
    maxWidth: '80%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};
export const notificationMessageStyle: any = {
    fontSize: '14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};
