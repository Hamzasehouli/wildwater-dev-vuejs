export default [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/our-mission",
    name: "mission",
    component: () => import("../views/OurMission.vue"),
  },
  {
    path: "/our-values",
    name: "values",
    component: () => import("../views/OurValues.vue"),
  },
  {
    path: "/our-history",
    name: "history",
    component: () => import("../views/OurHistory.vue"),
  },
  {
    path: "/our-governance",
    name: "gov",
    component: () => import("../views/OurGovernance.vue"),
  },
  {
    path: "/velenia",
    name: "velenia",
    component: () => import("../views/Velenia.vue"),
  },
  {
    path: "/absolute-quality",
    name: "absolute-quality",
    component: () => import("../views/Quality.vue"),
  },
  {
    path: "/environment",
    name: "environment",
    component: () => import("../views/Environment.vue"),
  },
  {
    path: "/our-communitites",
    name: "community",
    component: () => import("../views/Community.vue"),
  },
  {
    path: "/our-partner",
    name: "partners",
    component: () => import("../views/OurPartner.vue"),
  },
  {
    path: "/our-collaborators",
    name: "collaborators",
    component: () => import("../views/Collaborators.vue"),
  },
  {
    path: "/career",
    name: "career",
    component: () => import("../views/Career.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/press",
    name: "press",
    component: () => import("../views/Press.vue"),
  },
  {
    path: "/:notFound(.*)",
    component: () => import("../components/NotFound.vue"),
  },
];
