<template>
  <div class="title"></div>
  <div class="content">
    <div class="left">
       List
      <router-link class="leftitem" to="button">button</router-link>
      <router-link class="leftitem" to="form">form</router-link>
      ro
    </div>
    <div class="right">
      word detail
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import button from "../components/button.vue";
import form from "../components/form.vue";
export default {};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 100px;
  background-color: rgb(150, 122, 122);
}
.content {
  width: 100%;
  height: 830px;
  background-color: rgb(91, 102, 82);
  display: flex;
  .left {
    display: flex;
    flex-direction: column;
    background-color: rgb(219, 94, 94);
    width: 10%;
    font-size: 30px;
    //   justify-content: space-around;
    .leftitem {
      margin: 30px 0;
    }
  }
}
</style>