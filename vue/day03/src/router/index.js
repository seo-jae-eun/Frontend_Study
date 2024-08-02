import { createRouter, createWebHistory } from "vue-router";

import OnePage from "@/pages/OnePage.vue";
import TwoPage from "@/pages/TwoPage.vue";
import Sub1Component from "@/components/Sub1Component.vue";
import Sub2Component from "@/components/Sub2Component.vue";
import LoginPage from "@/pages/LoginPage.vue";

// next 함수를 이용해서 from에서 to로 이동
const requireLogin = (from, to, next) => {
    let num = 100;
    // 로그인 한 상태
    if (num > 10) {
        // 정상적으로 이동
        return next();
    }
    // 로그인 안된 상태
    // 로그인 페이지로 이동
    next("/two");
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/login", component: LoginPage },
        { path: "/one/:idx", component: OnePage, beforeEnter: requireLogin },
        {
            path: "/two", component: TwoPage, children: [
                { path: "sub1", component: Sub1Component },
                { path: "sub2", component: Sub2Component }
            ]
        },
    ],
});

export default router;