import { createRouter, createWebHashHistory } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: AppLayout,
            children: [
                {
                    path: "/",
                    name: "dashboard",
                    component: () => import("@/views/Dashboard.vue")
                },
                {
                    path: "/pages/empty",
                    name: "empty",
                    component: () => import("@/views/pages/Empty.vue")
                },
                {
                    path: "/pages/crud",
                    name: "crud",
                    component: () => import("@/views/pages/Crud.vue")
                },
                {
                    path: "/profile",
                    name: "profile",
                    component: () => import("@/views/pages/Profile.vue")
                },
                {
                    path: "/courses",
                    name: "courses",
                    component: () => import("@/views/pages/Courses.vue")
                }
            ]
        },
        {
            path: "/auth",
            component: () => import("@/layout/AuthLayout.vue"),
            children: [
                {
                    path: "login",
                    name: "login",
                    component: () => import("@/views/pages/auth/Login.vue")
                },
                {
                    path: "register",
                    name: "register",
                    component: () => import("@/views/pages/auth/Register.vue")
                }
            ]
        },
        {
            path: "/landing",
            name: "landing",
            component: () => import("@/views/pages/Landing.vue")
        },
        {
            path: "/pages/notfound",
            name: "notfound",
            component: () => import("@/views/pages/NotFound.vue")
        },
        {
            path: "/auth/access",
            name: "accessDenied",
            component: () => import("@/views/pages/auth/Access.vue")
        },
        {
            path: "/auth/error",
            name: "error",
            component: () => import("@/views/pages/auth/Error.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: { name: "notfound" }
        }
    ]
});

router.afterEach((to, from) => {
    console.log(to.name);
    const route = to;

    if (route.meta.i18n) {
        document.title = Vue.i18n.translate(route.meta.i18n);
    } else if (route.meta.title) {
        document.title = `${route.meta.title} | ${DEFAULT_TITLE}`;
    } else {
        document.title = DEFAULT_TITLE;
    }
});

export default router;
