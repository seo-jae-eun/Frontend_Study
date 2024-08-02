<template lang="">
    <h2>로그인 페이지</h2>

    <input v-model="member.email" type="email">
    <input v-model="member.password" type="password">
    <button @click="login">로그인</button>

</template>
<script>

export default {
    name: 'LoginPage',
    data() {
        return {
            member: {email: null, password: null}
        }
    },
    methods: {
        login() {
            console.log("로그인 시도")
        }
    },

}
</script>
<style lang="">
    
</style>