<template>
  <h3>
    Button 按钮
  </h3>
  <p>按钮用于开始一个即时操作。</p>

  <p style="margin-top:30px">何时使用</p>
  <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>

  <p style="margin-top:30px">注意</p>
  <p>以下代码中的 组件/函数 需要统一从 block-ui-1 中导入</p>

  <p style="margin-top:30px">代码演示</p>
  <div>
    <ButtonTool @click="func">
      I'm button
    </ButtonTool>
  </div>
</template>
<script>
import ButtonTool from "../../lib/buttonTool.vue";
export default {
  components: {
    ButtonTool: ButtonTool,
  },
  setup() {
    const func = () => {
      console.log("clicked");
    };
    return { func };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  lang='scss'>
</style>
