import { createRouter, createWebHistory } from "vue-router";

import GroupBuyPage from "@/pages/GroupBuyPage.vue";
import ProductPage from "@/pages/ProductPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/gpbuy", component: GroupBuyPage },
        { path: "/product", component: ProductPage },
    ],
});

export default router;