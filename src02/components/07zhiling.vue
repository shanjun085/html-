<template>
  <div class="person">
    <button @click="changeImg">修改图片</button>
    <img v-bind:src="imgObj.src" :alt="imgObj.alt">
  </div>
</template>
<!--
    关于Vue中的指令：
        1.所有的指令需要编写在 template 当中. 在 script 脚本中不支持指令。
        2.所有指令的语法格式：v-xxx
        3.v-on:click 其中 v-on 指令的作用是：将 setup  函数暴露的回调函数绑定到某个事件上。简写形式：@click

        重点关注一下：v-bind 指令。
        1.v-bind 指令的用法
        第一种语法：完整方式
        <标签 v-bind:属性="setup函数暴露的数据"></标签>
        第二种语法:简写形式
        <标签 :属性="setup函数暴露的数据"></标签>
-->




<script lang="ts" name="PersonVue" setup>
import {reactive} from 'vue';
        
        //响应式
        let imgObj = reactive({
            src:"https://picsum.photos/800/600",
            alt:"图片加载失败"
        });
        let changeImg = () => {
            imgObj.src = `https://picsum.photos/640/480?t=${Date.now()}`;
        };

</script>

<style scoped>
    .person {
        background-color: sandybrown;
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
    button {
        margin: 0 5px;
    }
    img {
        width:200px;
    }
</style>
