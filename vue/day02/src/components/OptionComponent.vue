<template lang="">
    <option :value="product.price">{{ product.menu }} / {{ product.price }}</option>
</template>
<script>
export default {
    name: 'OptionComponent',
    props: ["product"],   
}
</script>
<style lang="">
    
</style>