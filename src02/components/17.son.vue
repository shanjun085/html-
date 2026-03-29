<template>
    <div class="son">
      <h3>子组件</h3>
      <h4>计算器:{{ count }}</h4>
      <button @click="addOne">加1</button>
    </div>
  </template>
  
  <script lang="ts" setup>
import { ref } from 'vue';
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

//准备一个响应式数据
let count = ref(0);

function addOne(){
  count.value++;
}
 //编写生命周期钩子函数。
 //创建（组件创建时最先调用 setup 函数，setup函数只在组件创建阶段执行一次。）
 console.log("创建");


 //挂载
 //挂载前
 //在setup函数的执行过程中完成了 回调函数 和 beforeMount 事件的绑定。
 //严格来说，()=>{}，这个东西是钩子。
 onBeforeMount(()=>{
  console.log("挂载前");
 });
 
 //挂载完成
 onMounted(()=>{
  console.log("挂载完成");
 });
 
 //更新
 //更新前
 onBeforeUpdate(()=>{
  console.log("更新前");
 });
 //更新完成
 onUpdated(()=>{
  console.log("更新完成");
 });

 //销毁/卸载
 //销毁前
 onBeforeUnmount(()=>{
  console.log("销毁前");
 });
 //销毁完成
 onUnmounted(()=>{
  console.log("销毁完成");
 });
</script>
  
  <style scoped>
  .son {
    background-color: rgb(124, 219, 250);
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
  }
  </style>