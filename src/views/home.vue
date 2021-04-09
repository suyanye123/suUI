<template>
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
    
    <router-link class="bottom" to="/home">start</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.introduce-content {
  font-size: 30px;
  height: 500px;
  letter-spacing: normal;
  background-color: #fef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bottom{
      margin-top: 100px;
      background-color: rgb(204, 24, 24);
  }
}
</style>