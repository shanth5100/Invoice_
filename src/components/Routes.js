import EmployeeForm from "./secure/EmployeeForm";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: EmployeeForm,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: EmployeeForm,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: EmployeeForm,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: EmployeeForm,
    layout: "/admin"
  }
//   ,
//   {
//     path: "/icons",
//     name: "Icons",
//     icon: "pe-7s-science",
//     component: Icons,
//     layout: "/admin"
//   },
//   {
//     path: "/maps",
//     name: "Maps",
//     icon: "pe-7s-map-marker",
//     component: Maps,
//     layout: "/admin"
//   },
//   {
//     path: "/notifications",
//     name: "Notifications",
//     icon: "pe-7s-bell",
//     component: Notifications,
//     layout: "/admin"
//   },
//   {
//     upgrade: true,
//     path: "/upgrade",
//     name: "Upgrade to PRO",
//     icon: "pe-7s-rocket",
//     component: Upgrade,
//     layout: "/admin"
//   }
];

export default routes;