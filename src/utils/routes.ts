import { lazy } from "react";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Homepage/Homepage")),
    name: "home",
    access: true,
  },
  {
    path: "/bestsellers/:category",
    component: lazy(() => import("../pages/Bestsellers/Bestsellers")),
    name: "category",
    access: true,
  },
  {
    path: "/review/:title",
    component: lazy(() => import("../pages/BookInfo/BookInfo")),
    name: "book review",
    access: true,
  },
];
