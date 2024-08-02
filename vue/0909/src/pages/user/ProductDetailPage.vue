<template>
    <div id="wrapper">
        <HeaderComponent></HeaderComponent>
        <ProductDetailComponent></ProductDetailComponent>
        <FooterComponent></FooterComponent>
    </div>


</template>

<script>
import HeaderComponent from '../../components/user/HeaderComponent.vue'
import FooterComponent from '../../components/user/FooterComponent.vue'
import ProductDetailComponent from '../../components/user/ProductDetailComponent.vue'


export default {
    name: "ProductDetailPage",
    components: {
        HeaderComponent,
        FooterComponent,
        ProductDetailComponent
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped></style>