<template>
    <h1 ref="h1Tag">리스트 컴포넌트</h1>
    <div v-if="isLoading">로딩 중...</div>
    <ul>
        <ItemComponent v-for="data in dataList" :key="data.bidIdx" :data="data"/>
    </ul>
    <!-- <button @click="getData">데이터 가져오기</button> -->

  
  </template>
  
  
  <script>
  import ItemComponent from './ItemComponent.vue';
  import axios from "axios";

  export default {
    name: 'ListComponent',
    components : {
        ItemComponent
    },
    data() {
        return { dataList: [], isLoading: true }
    },
    created() { // DOM 접근 못함, 빠름
        console.log("created 실행");
        console.log(this.$refs.h1Tag);
        this.getData();
    },
    mounted() { // DOM 접근 가능, created보다 느림
        console.log("mounted 실행");
        console.log(this.$refs.h1Tag);
        // this.getData();

    },
    methods: {
        async getData() {
            try {
                const response = await axios.get("http://localhost:8081/gpbuy/registered/bid/list?gpbuyIdx=1", {
                    headers: {
                        Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJpZHgiOjEsImVtYWlsIjoid29kbXM1NTIyQG5hdmVyLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE3MjI0OTQwODMsImV4cCI6MTcyMjQ5NzY4M30.DiREo5AJKV3oue1dUmWjB_xZFvLKCahN2u3k4kC8DRI "
                    }
                });
                console.log(response.data.result);
                this.dataList = response.data.result;
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false;
            }
            
        }
    }

  }
  </script>
  
  <style scoped>
  
  </style>
  