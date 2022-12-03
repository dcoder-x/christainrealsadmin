import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Administrators = lazy(() => import("../views/ui/Admins.jsx"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Events = lazy(() => import("../views/ui/Events.jsx"));
const Lovequest = lazy(() => import("../views/ui/Lovequest.jsx"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Meetups= lazy(() => import("../views/ui/Meetups.jsx"));
const Discussions= lazy(() => import("../views/ui/Discussion.jsx"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/administrators", exact: true, element: <Administrators /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/events", exact: true, element: <Events /> },
      { path: "/lovequest", exact: true, element: <Lovequest /> },
      { path: "/posts", exact: true, element: <Cards /> },
      { path: "/meetups", exact: true, element: <Meetups /> },
      { path: "/discussions", exact: true, element: <Discussions /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
