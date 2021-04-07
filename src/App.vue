<template>
  <div class="app-header">
    <router-link class="item" to="/">introduce</router-link>
    <router-link class="item" to="/home">home</router-link>
    
  </div>
  <div class="app-content">
    <div class="app-right"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("./index.scss");
.item{
  font-size:30px;
  margin-right: 10px;
}
</style>
