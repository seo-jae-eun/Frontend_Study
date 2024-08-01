import { createRouter, createWebHistory } from "vue-router";

import ListComponent from "@/components/ListComponent.vue";
import ParentComponent from "@/components/ParentComponent.vue";
import ProductDetailComponent from "@/components/ProductDetailComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/list", component: ListComponent },
        { path: "/parent", component: ParentComponent },
        { path: "/detail", component: ProductDetailComponent },
    ],
});

export default router;