import React from "react";
import Notifications from "./Notifications";
import { NotificationContainerProvider } from "./context/notification-container-context";
export type NotificationPosition =
  | "top-right"
  | "bottom-right"
  | "bottom-left"
  | null;
export interface INotificationContainerProps {
  children?: React.ReactNode;
  position: NotificationPosition;
  exitIconClassName?: string;
  exitIconStroke?: string;
  exitIconHover?: string;
  titleClassName?: string;
  cardClassName?: string;
}

const NotificationContainer = (props: INotificationContainerProps) => {
  const {
    children,
    position,
    exitIconClassName,
    exitIconStroke,
    exitIconHover,
    titleClassName,
    cardClassName,
  } = props;
  return (
    <NotificationContainerProvider>
      <Notifications
        exitIconClassName={exitIconClassName}
        exitIconStroke={exitIconStroke}
        exitIconHover={exitIconHover}
        titleClassName={titleClassName}
        cardClassName={cardClassName}
        position={position}
        customBody={children}
      />
    </NotificationContainerProvider>
  );
};
export default NotificationContainer;
