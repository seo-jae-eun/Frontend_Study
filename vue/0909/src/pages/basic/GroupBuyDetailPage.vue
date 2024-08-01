<template>
    <div id="wrapper">
        <HeaderComponent></HeaderComponent>
        <GroupbuyDetailComponent></GroupbuyDetailComponent>
        <FooterComponent></FooterComponent>
    </div>


</template>

<script>
import HeaderComponent from '../../components/basic/HeaderComponent.vue'
import FooterComponent from '../../components/basic/FooterComponent.vue'
import GroupbuyDetailComponent from '../../components/basic/GroupbuyDetailComponent.vue'


export default {
    name: "GroupBuyPage",
    components: {
        HeaderComponent,
        FooterComponent,
        GroupbuyDetailComponent
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
</style>