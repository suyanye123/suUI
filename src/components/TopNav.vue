<template>
  <div class="topnav">
    <router-link to="/"
                 class="logo">suUI</router-link>
  </div>
</template>
<script>
export default {
  name: "topNav",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  lang='scss' scoped >
.logo {
  color: #fff;
  display: flex;
  font-size: 20px;
  width: 100vw;
  height: 8vh;
  background-color: #698ff5;
}
</style>
