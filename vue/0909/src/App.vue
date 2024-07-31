<template>
  <GroupBuyPage></GroupBuyPage>
</template>

<script>
import GroupBuyPage from './pages/GroupBuyPage.vue';


export default {
  name: 'App',
  components: {
    GroupBuyPage
  }
}
</script>

<style>
@charset "utf-8";

html,
body,
div,
header,
nav,
section,
aside,
article,
footer,
ul,
ol,
li,
dl,
dt,
dd,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

/* 숨김 콘텐츠 */
.hidden {
  position: absolute;
  left: -9999px;
}

/* 링크 스타일 */
a:link {
  color: #4f4f4f;
  text-decoration: none;
}

a:visited {
  color: #8a8e91;
  text-decoration: none;
}

a:hover,
a:focus {
  /*color: red;*/
  text-decoration: none;
}

/* 전체적인 레이아웃 설계 */
#top_header,
#bot_header,
#main_content,
#top_footer_area,
#menu_hover,
#mid_footer_area,
#bot_footer_area {
  width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
