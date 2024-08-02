<template>
    <div id="wrapper">
        <HeaderComponent></HeaderComponent>
        <GroupbuyDetailComponent></GroupbuyDetailComponent>
        <FooterComponent></FooterComponent>
    </div>


</template>

<script>
import HeaderComponent from '../../components/user/HeaderComponent.vue'
import FooterComponent from '../../components/user/FooterComponent.vue'
import GroupbuyDetailComponent from '../../components/user/GroupbuyDetailComponent.vue'


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