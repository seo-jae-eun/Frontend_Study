<template>
    <div id="wrapper">
        <HeaderComponent></HeaderComponent>
        <ContentsComponent></ContentsComponent>
        <FooterComponent></FooterComponent>
    </div>


</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import ContentsComponent from '../components/contents/GroupbuyComponent.vue'


export default {
    name: "GroupBuyPage",
    components: {
        HeaderComponent,
        FooterComponent,
        ContentsComponent
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped></style>