<template lang="">
    <h1>상품 상세 컴포넌트</h1>
    상품 이름 : <input v-model="productList.name"> <br>
    상품 가격 : <input v-model="productList.price"> <br>
    옵션 <select @change="updateTotalPrice">
        <option disabled selected>옵션을 선택하세요</option>
        <OptionComponent  v-for="product in productList.options" :key="product.menu" :product="product"/>
    </select> <br>
    전체 가격 : {{ totalPrice }}
</template>
<script>
import axios from 'axios';
import OptionComponent from './OptionComponent.vue';

export default {
    name: 'ProductDetailComponent',
    components: {
        OptionComponent
    },
    data() {
        return {
            productList: [],
            totalPrice: 0
        }
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            const response = await axios.get("https://run.mocky.io/v3/1d74fc62-6e14-4450-aec1-beffcdc98453");
            console.log(response.data.product.options);
            this.productList = response.data.product;
        },
        updateTotalPrice(event) {
            this.totalPrice = this.productList.price + Number(event.target.value);
        }
        
    }
}
</script>
<style lang="">
    
</style>
