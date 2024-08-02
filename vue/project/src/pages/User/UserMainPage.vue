<template>
    <div id="wrapper">
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '@/components/User/HeaderComponent.vue';
import FooterComponent from '@/components/User/FooterComponent.vue';
import MainComponent from '@/components/User/MainComponent.vue';

export default {
    name: "UserMainPage",
    data() {
        return { 
        }
    },
    methods: {

    },
    components: {
        HeaderComponent,
        FooterComponent,
        MainComponent,
    }
}

</script>

<style scoped>

</style>