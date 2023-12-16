import { useContext } from "react";
import { ActiveNotificationContext } from "../context/active-notification-context";

export const useActiveNotification = () => {
  const context = useContext(ActiveNotificationContext);

  if (!context) {
    throw new Error(
      "useActiveNotification must be used inside the ActiveNotificationContext"
    );
  }
  const { onNotificationHide } = context;
  return { onNotificationHide };
};
