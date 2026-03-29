<template>
  <!-- v-bind允许绑定对象 -->
  <div :class="{'active':isActive, 'text-danger': hasError}">
      这是一个带有动态类名的div元素
  </div>
  <!-- 请认真阅读以下注释信息： -->
  <!-- 当变量 isActive 和 hasError 都是true时，以上代码的最终渲染效果如下 -->
  <!--
  <div class="active text-danger">
      这是一个带有动态类名的div元素
  </div>
  -->
  <!-- 当变量 isActive是true，hasError是false时，以上代码的最终渲染效果如下 -->
  <!--
  <div class="active">
      这是一个带有动态类名的div元素
  </div>
  -->
  
  //v-bind实现动态属性名
  <div :[attributeName]="value"></div>
</template>

<script lang="ts" setup name="PersonInfo">
  const isActive = 'true';
  const hasError = 'true';
  
  let attributeName = 'age';
  let value = '110';
</script>

<style scoped>
  /* 基础样式 */
  div {
      padding: 20px;
      margin: 10px;
      border-radius: 4px;
      transition: all 0.3s ease;
  }

  /* active 类样式 */
  .active {
      background-color: #42b983;
      border: 1px solid #3aa876;
  }

  /* text-danger 类样式 */
  .text-danger {
      color: #f56c6c;
      font-weight: bold;
  }
</style>