<template>
  <div>
    X : <input type="text" v-model.number="x.a" /><br />
    Y : <input type="text" v-model.number="y" /><br />
    <button @click="plus">더하기</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// data()에서 변수 만들던 것
const x = ref({ a: 10, b: "글자" });
const y = ref(20);

const plus = () => {
  y.value++;
}

</script>