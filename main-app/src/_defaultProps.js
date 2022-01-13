export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/react",
        name: "React",
        component: "./Welcome",
      },
      {
        path: "/vue",
        name: "Vue",
        access: "canAdmin",
        component: "./Admin",
      },
    ],
  },
};
