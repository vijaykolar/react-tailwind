import { NotificationMenuTypes } from "./types";

export const notificationMenu: NotificationMenuTypes[] = [
  {
    id: 1,
    name: "Jessie Samson",
    icon: "💬",
    description: "Mentioned you in a comment",
    date: "10m",
    image:
      "https://prium.github.io/phoenix/v1.9.0/assets/img/team/40x40/30.webp",
    status: "available",
  },
  {
    id: 2,
    name: "Jane Foster",
    icon: "📅",
    description: "Created an event",
    date: "1h",
    image:
      "https://prium.github.io/phoenix/v1.9.0/assets/img/team/40x40/57.webp",
    status: "busy",
  },
  {
    id: 3,
    name: "John Doe",
    icon: "📅",
    description: "Created an event",
    date: "23h",
    image: "",
    status: "away",
  },
];
