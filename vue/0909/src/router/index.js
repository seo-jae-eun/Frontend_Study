import { createRouter, createWebHistory } from "vue-router";

import GroupBuyDetailPage from "@/pages/user/GroupBuyDetailPage.vue";
import ProductDetailPage from "@/pages/user/ProductDetailPage.vue";
import LoginPage from "@/pages/common/LoginPage.vue";
import SignupPage from "@/pages/common/SignupPage.vue";
import UserSignupComponent from "@/components/common/UserSignupComponent.vue";
import SellerSignupComponent from "@/components/common/SellerSignupComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/gpbuy/detail", component: GroupBuyDetailPage },
        { path: "/product/detail", component: ProductDetailPage },
        { path: "/login", component: LoginPage },
        {
            path: "/signup", component: SignupPage
            , children: [
                { path: "user", component: UserSignupComponent },
                { path: "seller", component: SellerSignupComponent },
            ]
        },
    ],
});

export default router;