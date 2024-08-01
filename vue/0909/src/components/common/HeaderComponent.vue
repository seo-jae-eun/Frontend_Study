<template>
    <div class="header">
        <div class="headerInner">
            <a href="/메인페이지.html" class="headerLogo">
                <span class="blind">0909</span>
            </a>
            <div class="headerTitle" v-if="headerTitle">{{ headerTitle }}</div>
        </div>
    </div>
</template>

<script>
export default {
name: "HeaderComponent",
props: ["headerTitle"]
}
</script>

<style scoped>
</style>