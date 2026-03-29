<template>
    <div class="son">
      <h3>子组件</h3>
      <!-- 普通的标签 -->
      <button ref="myBtnSon">子组件中的按钮</button>
      <br>
      <button @click="getMyBtnSon">获取myBtnSon</button>
      <br>
      <h3>年龄:{{ user.age }}</h3>
    </div>
  </template>
  
  <script lang="ts" setup>
  //组件的生命周期：创建、挂载、更新、卸载。
  //setup 函数什么时候执行，执行几次？
  //setup函数是组件创建的时候执行，只执行一次。
  import { ref,reactive } from 'vue';
  
  //要求：这个变量名必须和 标签中的 ref 属性指定的名字一致。
  //以下代码在执行的时候是属于组件创建过程执行的。
  //这里会创建一个RefImpl对象，但是此时对象的value属性是空的。
  let myBtnSon = ref();
  
  //在setup函数执行过程中，当页面还没有完全渲染的情况下：myBtnSon 是 undefined。这个时候是用不了的。
  //console.log("====>",myBtnSon.value)
  function getMyBtnSon() {
    // 通过响应式对象 myBtnSon 的 value 属性，来获取对应的DOM元素。
    console.log(myBtnSon.value);
  }

  //普通数据，不具备响应式。
  let username = "jack";
  //响应式数据
  let user = reactive({
    age:10
  });

  //函数
  function myFun(){
    console.log("my Fun执行");
  }
  //暴露数据，暴露函数，暴露响应式数据出去。
  //这是Vue框架全局已经注册好的一个函数，可以直接使用，不需要手动import
    // defineExpose({
    //     username:username,
    //     user:user,
    //     myFun: myFun
    // });
    
    //简写
    defineExpose({username,user,myFun});
  </script>
  
  <style scoped>
  .son {
    background-color: rgb(124, 219, 250);
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
  }
  </style>