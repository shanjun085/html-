<template>
  <!-- v-bind允许绑定一个数组 -->
  <!--当两个变量都有值的情况下，渲染结果是：<div class="active text-danger">-->
  <div :class="[activeClass, errorClass]">
      这是一个带有动态类名的div元素
  </div>
  <!-- 请认真阅读以下注释信息： -->
  <!-- 以上代码如果变量activeClass和errorClass都有值的情况下，最终渲染结果如下 -->
  <!--
  <div class="active text-danger">
      这是一个带有动态类名的div元素
  </div>
  -->
  <!-- 以上代码如果变量activeClass有值，errorClass是空字符串的情况下，最终渲染结果如下 -->
  <!--
  <div class="active">
      这是一个带有动态类名的div元素
  </div>
  -->
  <div :abc="[activeClass,errorClass]">绑定到自定义的abc属性上，效果怎么样</div>
</template>

<script lang="ts" setup name="PersonInfo">
  const activeClass = 'active';
  const errorClass = 'text-danger';
  //变成空字符串就不显示效果了，样式不会生效
  //const activeClass =''
  //const errorClass =''
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