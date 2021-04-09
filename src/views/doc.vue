<template>
  <div class="layout">
    <topNav></topNav>
    <div class="content">
      <aside>
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/getstart">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>

  </div>

</template>

<script>
import topNav from '../components/TopNav.vue'
export default {
  components:{
    topNav
  }
};
</script>

<style lang="scss" scoped>
.content{
  background-color: rgb(148, 137, 137);
  display: flex;
  width: 100vw;
  height: 90vh;
   aside{
    width: 20vw;
    height: 90vh;
    background-color: rgb(86, 119, 230);
  }
   main{
   width: 80vw;
   height: 80vh;
   background-color: rgb(226, 221, 221);
  }
}
</style>