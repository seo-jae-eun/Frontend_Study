import { defineStore } from "pinia";

// 전역 저장소 생성
export const useMemberStore = defineStore('member', {
    // 변수
    state: () => ({ name: 'test01', age: 100 }),
    // 함수
    actions: {
        getAge() {
            this.age++;
        }
    }
});