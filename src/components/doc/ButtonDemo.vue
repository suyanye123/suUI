<template>
  <div>
Button example
  </div>
  <div>
  <ButtonTool @click="func">
    I'm button
  </ButtonTool>
  </div>
</template>
<script>
import ButtonTool from '../../lib/buttonTool.vue'
export default {
  components:{
    ButtonTool:ButtonTool
  },
  setup(){
    const func=()=>{
      console.log('clicked')
    }
    return {func}
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  lang='scss'>
</style>
