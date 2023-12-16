import React from "react";
import { CloseIcon } from "../icon/close-icon";
import { notificationBodyStyle, notificationCardStyle } from "../style/style";

export interface ICustomNotificationProps {
  customBody: any;
  timeOut: number;
  autoDismiss: boolean;
  onCloseClick: () => void;
  onRequestHide: () => Promise<void>;
  exitIconClassName?: string;
  exitIconStroke?: string;
  exitIconHover?: string;
  cardClassName?: string;
}

const CustomNotification = (props: ICustomNotificationProps) => {
  const {
    onRequestHide,
    onCloseClick,
    timeOut,
    exitIconClassName,
    cardClassName,
    exitIconStroke,
    exitIconHover,
    customBody,
    autoDismiss,
  } = props;

  const [onCardMouseEnter, setOnCardMouseEnter] = React.useState(false);
  React.useEffect(() => {
    let outerTimer: any;
    const onlyDismiss = () => {
      outerTimer = setTimeout(() => {
        requestHide();
      }, timeOut * 1000);
    };
    if (autoDismiss) onlyDismiss();
    return () => {
      if (outerTimer == null || outerTimer == undefined)
        clearTimeout(outerTimer!!);
    };
  }, []);

  const requestHide = () => {
    if (onRequestHide) {
      onRequestHide();
    }
  };
  const handleClick = async () => {
    if (onCloseClick) {
      onCloseClick();
    }
    requestHide();
  };

  return (
    <div
      className={cardClassName}
      onMouseEnter={() => setOnCardMouseEnter(true)}
      onMouseLeave={() => setOnCardMouseEnter(false)}
      role="alert"
      style={notificationCardStyle(onCardMouseEnter)}
    >
      <CloseIcon
        onClick={handleClick}
        exitIconStroke={exitIconStroke}
        exitIconHover={exitIconHover}
        className={exitIconClassName}
      />
      <div style={notificationBodyStyle}>{customBody}</div>
    </div>
  );
};

export default CustomNotification;
