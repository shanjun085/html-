<template>
  <div>
      <!-- 绑定图片源 -->
      <img :src="imagePath" :alt="imageDescription">

      <!-- 绑定样式 -->
      <div :style="{ color: textColor, fontSize: fontSize + 'px' }">
          动态样式文本
      </div>

      <!-- 绑定表单值 -->
      <input type="text" :value="inputValue">

      <!-- 绑定类名 -->
      <button :class="{ 'btn-primary': isPrimary, 'btn-disabled': isDisabled }" :disabled="isDisabled">
          点击我
      </button>

  </div>
</template>

<script lang="ts" setup name="PersonInfo">
  import { ref } from 'vue';

  const imagePath = '/vite.svg';
  const imageDescription = '示例图片';
  // ref() 函数不是必须的，需要响应式就加，不需要响应式就可以不加。
  const textColor = ref('#42b983');
  const fontSize = ref(16);
  const inputValue = ref('jackson');
  const isPrimary = ref(true);
  const isDisabled = ref(false);
</script>

<style scoped>
  .btn-primary {
      background-color: #42b983;
      color: white;
  }

  .btn-primary:hover {
      background-color: #3aa876;
      transform: translateY(-2px);
  }
</style>