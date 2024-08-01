<template>
    <div id="wrapper">
        <HeaderComponent></HeaderComponent>
        <ProductDetailComponent></ProductDetailComponent>
        <FooterComponent></FooterComponent>
    </div>


</template>

<script>
import HeaderComponent from '../../components/basic/HeaderComponent.vue'
import FooterComponent from '../../components/basic/FooterComponent.vue'
import ProductDetailComponent from '../../components/basic/ProductDetailComponent.vue'


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