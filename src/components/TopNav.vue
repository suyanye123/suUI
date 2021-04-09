<template>
  <div class="topnav">
    <router-link to="/"
                 class="logo">suUI</router-link>
  </div>
</template>
<script>
export default {
  name:'topNav',
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  lang='scss' scoped >
.logo {
  display: flex;
  font-size: 20px;
  width: 100vw;
  background-color: rgb(245, 178, 178);
}
</style>
