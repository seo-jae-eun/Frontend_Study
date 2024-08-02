import { defineStore } from "pinia";
import axios from "axios";

const backend = "/api";

export const useUserStore = defineStore('user', {
    state: () => ({ isLoggedIn: false }),
    persist: true,
    actions: {
        async login(user) {
            let response = await axios.post(backend + "/user/login", user);
            if (response.status === 200) {
                this.isLoggedIn = true;
                return true;
            } else {
                return false;
            }
        }
    }
});