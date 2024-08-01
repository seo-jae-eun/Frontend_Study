<template>
  <h1>부모 컴포넌트</h1>
  {{ messageFromChild }}
  <hr />
  <!-- <ChildComponent v-bind:property="messageToChild"/> -->
  <!-- v-bind 빼도 됨 -->
  <ChildComponent :property="messageToChild" @thankyou="get"/>

</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'ParentComponent',
  data() {
    return { messageFromChild: "", messageToChild: "사실 우리집에는 숨겨둔 재산과 땅이 있어.." }
  },
  components : {
    ChildComponent
  },
  methods: {
    get(e) {
      this.messageFromChild = e;
    }
  }
}
</script>

<style scoped>

</style>
