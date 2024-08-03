import { defineStore } from "pinia";
import axios from "axios";

const backend = "/api";

export const useGroupbuyStore = defineStore('groupbuy', {
    state: () => ({
        waitGroupbuy: {},
        progressGroupbuy: {}
    }),
    actions: {
        async getWaitGroupbuy(idx) {
            const response = await axios.get(backend + "/gpbuy/registered/bid/list?gpbuyIdx=" + idx, {
                withCredentials: true
            });
            this.waitGroupbuy = response.data.result;
            console.log(this.waitGroupbuy);
        },
        async getProgressGroupbuy(idx) {
            const response = await axios.get(backend + "/gpbuy/detail?gpbuyIdx=" + idx);
            this.progressGroupbuy = response.data.result;
            console.log(this.progressGroupbuy);
        },
        getCategoryText(categoryIdx) {
            const categoryMap = {
                1: '전자 제품',
                2: '도서/티켓',
                3: '의류',
                4: '가전 제품',
                5: '유아동/출산',
                6: '스포츠 용품',
                7: '뷰티',
                8: '가구',
                9: '식품',
                10: '농수산물',
                11: '반려동물용품'
            };
            return categoryMap[categoryIdx] || '알 수 없는 카테고리';
        }
    }
});