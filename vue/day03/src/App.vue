<template>
  <ul>
    <router-link to="/one/1">
      <li>1-1</li>
    </router-link>
    <router-link to="/one/2">
      <li>1-2</li>
    </router-link>
    <router-link to="/two">
      <li>2</li>
    </router-link>
    <router-link to="/two/sub1">
      <li>2-sub1</li>
    </router-link>
    <router-link to="/two/sub2">
      <li>2-sub2</li>
    </router-link>
    <router-view></router-view>
  </ul>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  border: 1px solid black;
  display: inline-block;
  margin: 0px 10px;
  padding: 10px;
}
</style>
