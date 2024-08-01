<template>
    <div id="wrapper">
        <HeaderComponent></HeaderComponent>
        <MainComponent></MainComponent>
        <FooterComponent></FooterComponent>
    </div>


</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import MainComponent from '../components/ProductComponent.vue'


export default {
    name: "ProductPage",
    components: {
        HeaderComponent,
        FooterComponent,
        MainComponent
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped></style>