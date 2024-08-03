import { createRouter, createWebHistory } from "vue-router";

import UserMainPage from "@/pages/User/UserMainPage.vue";
import GroupBuyDetailPage from "@/pages/User/GroupBuyDetailPage.vue";
import ProductDetailPage from "@/pages/User/ProductDetailPage.vue";
import LoginPage from "@/pages/Common/LoginPage.vue";
import SignupPage from "@/pages/Common/SignupPage.vue";
import SignupComponent from "@/components/Common/SignupComponent.vue";
import UserSignupComponent from "@/components/Common/UserSignupComponent.vue";
import SellerSignupComponent from "@/components/Common/SellerSignupComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: UserMainPage },
        { path: "/gpbuy/detail/wait/:idx", component: GroupBuyDetailPage },
        { path: "/gpbuy/detail/progress/:idx", component: ProductDetailPage },
        { path: "/login", component: LoginPage },
        {
            path: "/signup", component: SignupPage
            , children: [
                { path: "common", component: SignupComponent },
                { path: "user", component: UserSignupComponent },
                { path: "seller", component: SellerSignupComponent },
            ]
        },
    ],
});

export default router;