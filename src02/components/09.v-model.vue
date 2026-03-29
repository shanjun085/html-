<template>
    <div class="person">
        <!--@input完整写法： v-on：input，vue绑定input事件-->
        <!--当用户在文本框上输入内容的时候：input事件就会触发-->
        <!--v-bind：value="这个位置是可以直接使用脚本中的变量的"-->
        <!--v-on：input="这个位置也是可以直接使用脚本中的变量的"-->
        <!--在v-on:input后面有一个固定的对象，固定写法：$event-->
        <!--$event.target 获取的是事件源对象。以下程序表示获取的是 input 框-->
        <!--由于现在是TS语法，因此要添加 as HTMLIputElement 断言。-->
      用户名：<input type="text" :value="username" @input="username = ($event.target as HTMLInputElement).value ">
      <div>{{ username }}</div>
      <br><br>
      <button @click="changeName">更新用户名</button>
    </div>
  </template>
  
<script lang='ts' setup>
  import { ref } from 'vue';
  
  // 脚本中的数据修改，那么template页面上的数据就跟着更新。
  // 以上这种方式是单向的，不是双向的，基于响应式对象来完成。
  
  let username = ref("jackson");
  
  let changeName = ()=>{
    username.value = "lucy";
  }
</script>

<style scoped>
    .person {
    background-color: rgb(252, 152, 80);
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
    }
    button {
    margin-right: 10px;
    }
</style>