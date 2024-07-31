<template>
  <!-- 보간법 -->
  <h1>{{ h1 }}</h1>
  <!-- 단방향 데이터 바인딩 디렉티브(v-로 시작하는 디렉티브 문법) -->
  <h2 v-text="h2"></h2>
  <h3 v-bind:value="nickname"></h3>


  <!-- v-html은 html 코드를 코드로써 출력 -->
  <div v-html="test"></div>
  <!-- v-text는 html 코드도 글자로 출력 -->
  <!-- <div v-text="test"></div> -->

  <!-- 양방향 데이터 바인딩 디렉티브 -->
  <input v-model="email" name="email">

  <!-- 조건 렌더링 디렉티브 -->
  <h1 v-if="num < 100">100보다 작을 때</h1>
  <h1 v-else-if="num == 100">100일 때</h1>
  <h1 v-else>100보다 클 때</h1>

  <!-- v-if와의 차이는 웹 페이지에 만들어지냐 아니냐 -->
  <!-- v-if는 해당 태그만 만들어지고 v-show는 만들어지는데 display:none으로 되어있음 -->
  <h1 v-show="num < 100">조건에 따라서 보이는 태그</h1>


  <!-- 반복 렌더링 디렉티브 -->
  <ul>
    <li v-for="menu in menus" :key="menu.num">
      {{ menu.menu }}
    </li>
  </ul>

  <button v-on:click="func01">이벤트01</button>
  <button @click="func02">이벤트02</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      menus: [{ num: 1, menu: "돈까스" }, { num: 2, menu: "포마토" }, { num: 3, menu: "배달" }],
      num: 1000, h1: "abd", h2: "def", test: "<h3>h3</h3>", email: "wodms5522@naver.com", nickname: "잰니"
    }
  },
  methods: {
    func01() {
      console.log("func01 실행");
      console.log(this.email);
      console.log(this.nickname);
    },
    func02() {
      console.log("func02 실행");
    }
  },
  props: {
    msg: String
  }
}
</script>
