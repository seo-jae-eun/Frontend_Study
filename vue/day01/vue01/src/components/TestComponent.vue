<template>
    <li>{{ message }}</li>
</template>

<script>
export default {
    name: "TestComponent",
    data() {
        return { message: "test" }
    }
}
</script>

<style scoped>
li {
    color: red;
    list-style: none;
}
</style>