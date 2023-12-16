import React from "react";
import CustomProgressBar from "./CustomProgressBar";
import { CloseIcon } from "../icon/close-icon";
import {
  notificationBodyStyle,
  notificationCardStyle,
  notificationMessageStyle,
  notificationTitleStyle,
} from "../style/style";

export interface IDefaultNotificationProps {
  title: string;
  message: string;
  timeOut: number;
  autoDismiss: boolean;
  showProgress: boolean;
  onCloseClick: () => void;
  onRequestHide: () => Promise<void>;
  exitIconClassName?: string;
  exitIconStroke?: string;
  exitIconHover?: string;
  titleClassName?: string;
  cardClassName?: string;
}

const DefaultNotification = (props: IDefaultNotificationProps) => {
  const {
    onRequestHide,
    onCloseClick,
    timeOut,
    exitIconClassName,
    cardClassName,
    exitIconStroke,
    exitIconHover,
    title,
    titleClassName,
    message,
    autoDismiss,
    showProgress,
  } = props;

  const [onCardMouseEnter, setOnCardMouseEnter] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [complete, setComplete] = React.useState(false);

  React.useEffect(() => {
    let outerTimer: any;
    const sleep = async (seconds: number) => {
      let innerTimer;
      await new Promise(
        (resolve) => (innerTimer = setTimeout(resolve, seconds * 1000))
      );
      clearTimeout(innerTimer);
    };
    const animate = async () => {
      for (let i = 0.1; i <= 100 + 0.1; i += 100 / timeOut) {
        if (complete) return;
        setProgress(i);
        await sleep(1);
      }
      await sleep(0.1);
      // Remove notification
      if (autoDismiss) requestHide();
    };
    const onlyDismiss = () => {
      outerTimer = setTimeout(() => {
        requestHide();
      }, timeOut * 1000);
    };
    // show progress
    if (showProgress) animate();
    else if (autoDismiss) onlyDismiss();
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
    setComplete(true);
    requestHide();
  };
  const body = (
    <>
      <div style={notificationBodyStyle}>
        <h1 style={notificationTitleStyle} className={titleClassName}>
          {title}
        </h1>
        <h4 style={notificationMessageStyle}>{message}</h4>
      </div>
      {showProgress ? <CustomProgressBar progress={progress} /> : null}
    </>
  );

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
      {body}
    </div>
  );
};

export default DefaultNotification;
