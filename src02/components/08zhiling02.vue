<template>
    <!-- 当 isButtonDisabled 是true的时候（不可用），渲染结果-->
    <!-- <button disabled>提交</button> -->
  
    <button :disabled="isButtonDisabled">提交</button>
  
    <!-- 当 isButtonDisabled 是false的时候（可用），渲染结果-->
    <!-- <button>提交</button> -->
  </template>
  
  <script lang="ts" setup name="PersonInfo">
    const isButtonDisabled = true;
  </script>