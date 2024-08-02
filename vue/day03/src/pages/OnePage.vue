<template lang="">
    <h2>1페이지</h2>
    <h3>{{ $route.params.idx }}</h3>

    <button @click="test">나이 Up</button>

    {{ memberStore.name }}
    {{ memberStore.age }}
</template>
<script>
import {mapStores} from 'pinia';
import { useMemberStore } from '@/stores/useMemberStore';
export default {
    name: 'OnePage',
    computed: {
        ...mapStores(useMemberStore)
    },
    methods: {
        test() {
            this.memberStore.getAge();
        }
    },
    mounted() {
        console.log(this.$route.params.idx);
        console.log(this.memberStore.name);
        console.log(this.memberStore.age);
        this.test();
    }
}
</script>
<style lang="">
    
</style>