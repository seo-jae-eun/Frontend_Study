<template>
  <h2>자식 컴포넌트</h2>
  어머님 말씀 : {{ property }}

  <button @click="$emit('thankyou', '엄마 아빠 사랑해요')">답장</button>
</template>

<script>
export default {
  name: 'ChildComponent',
  emits: ["thankyou"],
  props: ["property"]
}
</script>

<style scoped>

</style>
