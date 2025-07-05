// import { createRouter, createWebHistory } from "vue-router";
// import { session } from "./data/session";
// import { userResource } from "@/data/user";
// import CourseScheduleDetailsPage from './pages/CourseScheduleDetailsPage.vue'
// import { computed } from "vue";

// const routes = [
//   {
//     name: "Login",
//     path: "/login",
//     component: () => import("@/pages/AuthPage.vue"),
//     meta: { title: "Login | School System" },
//   },
 
//   {
//     path: "/",
//     name: "MainLayout",
//     redirect: "/dashboard",
//     component: () => import("/layouts/MainLayout.vue"),
//     children: [
//       {
//         path: "dashboard",
//         name: "dashboard",
//         component: () => import("@/pages/DashboardPage.vue"),
//         meta: { title: "Dashboard | School System" },
//       },
      

//     ],

//   },

// ];
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     return savedPosition || { top: 0 };
//   },
// });
// router.beforeEach(async (to, from, next) => {
//   let isLoggedIn = session.isLoggedIn;
//   try {
//     await userResource.promise;
//   } catch (error) {
//     isLoggedIn = false;
//   }

//   if (to.name === "Login" && isLoggedIn) {
//     next("/");
//   } else if (to.name !== "Login" && !isLoggedIn) {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });
// router.beforeEach((to) => {
//   document.title = to.meta?.title ?? "BABYEYI | Manage School Easily";
// });

// export default router;
