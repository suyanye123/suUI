<template>
  <topNav></topNav>
  <div class="introduce-content">
    <p>
      welcome to suUI ,this is a privite ui
      <br />
      witch used only for privite study
      <br />
      and for learning vue3 and vite
      <br />
      if you think this is a good job
      <br />
      please give me a star at github
    </p>
    <button class="start">
      <router-link to="/doc">get start</router-link>
    </button>
  </div>
</template>

<script>
import topNav from "../components/TopNav.vue";
export default {
  components: {
    topNav,
  },
};
</script>

<style lang="scss" >
.introduce-content {
  font-size: 30px;
  height: 90vh;
  letter-spacing: normal;
  background-color: #fef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bottom {
    margin-top: 100px;
    background-color: rgb(204, 24, 24);
  }
}
.start {
  margin-top: 50px;
  width: 100px;
  height: 30px;
  font-size: 20px;
}
</style>