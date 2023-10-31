import { createRouter, createWebHashHistory } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";
import { useAuth } from "../hooks/use-auth";
import { DEFAULT_TITLE } from "../datas/constants/app";

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
            path: "/access",
            children: [
                {
                    path: "not-access",
                    name: "accessDenied",
                    component: () => import("@/views/pages/access/Access.vue")
                },
                {
                    path: "error",
                    name: "error",
                    component: () => import("@/views/pages/access/Error.vue")
                },
                {
                    path: "notfound",
                    name: "notfound",
                    component: () => import("@/views/pages/access/NotFound.vue")
                }
            ]
        },

        {
            path: "/landing",
            name: "landing",
            component: () => import("@/views/pages/Landing.vue")
        },

        {
            path: "/:pathMatch(.*)*",
            redirect: { name: "notfound" }
        }
    ]
});

const changeDocumentTitleGuard = (to, from, next) => {
    if (to.meta.title) {
        document.title = `${to.meta.title} | ${DEFAULT_TITLE}`;
    } else {
        document.title = DEFAULT_TITLE;
    }

    next();
};

const loginCheckGuard = (to, from, next) => {
    const authPages = ["login", "register"];
    const isAuthPages = !authPages.includes(to.name);
    const { loggedIn } = useAuth();

    if (isAuthPages && !loggedIn()) {
        next({ name: "login" });
    }

    next();
};

router.beforeEach(loginCheckGuard);
router.beforeEach(changeDocumentTitleGuard);

export default router;
