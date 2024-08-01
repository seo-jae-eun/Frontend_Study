import { createRouter, createWebHistory } from "vue-router";

import GroupBuyDetailPage from "@/pages/basic/GroupBuyDetailPage.vue";
import ProductDetailPage from "@/pages/basic/ProductDetailPage.vue";
import LoginPage from "@/pages/common/LoginPage.vue";
import SignupPage from "@/pages/common/SignupPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/gpbuy/detail", component: GroupBuyDetailPage },
        { path: "/product/detail", component: ProductDetailPage },
        { path: "/login", component: LoginPage },
        { path: "/signup", component: SignupPage },
    ],
});

export default router;