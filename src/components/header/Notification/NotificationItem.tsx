import React from "react";
import { NotificationMenuTypes } from "./types";

type NotificationProps = {
  notification: NotificationMenuTypes;
};

function NotificationItem({
  notification,
}: NotificationProps): React.JSX.Element {
  const { name, image, date, icon, description, status } = notification;

  const statusClasses =
    status === "busy"
      ? "bg-red-500"
      : status === "available"
      ? "bg-green-500"
      : "bg-yellow-500";
  return (
    <li className="flex gap-x-3 w-full p-3 border-b border-gray-300">
      <div>
        <div className="relative">
          <img
            src={
              image
                ? image
                : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
            }
            alt={name}
            className="object-cover  rounded-full  h-9 w-9 "
          />
          <span
            className={`h-2 w-2 ${statusClasses} rounded-full inline-block absolute bottom-0 right-0`}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <h6 className="text-sm text-gray-700 font-semibold mb-1 flex-1">
            {name}
          </h6>
          <span className="text-xs text-gray-400">{date} ago</span>
        </div>

        <div className="flex gap-x-2 items-center">
          <span className="text-sm">{icon}</span>
          <p className="text-xs text-gray-500 flex-1">{description}</p>
        </div>
      </div>
    </li>
  );
}

export default NotificationItem;
