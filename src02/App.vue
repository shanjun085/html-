<!--根组件，在Vue当中，每一个组件对应一个文件，文件的拓展名是：xxx.vue -->
<!--一个合法的vue组件由三部分组成：模板、脚本、样式-->
<!--编写模板：HTML -->
<template>
    <div class="hello">
        <h1>hello vue3</h1>
        <!--第三步：使用这个组件-->
        <Person></Person>
        <!-- <Count></Count> -->
        <!-- <Du></Du> -->
        <!-- <Parent></Parent> -->
    </div>

</template>
<!--编写脚本,基于ts的脚本程序-->
<!--lang="ts"，表示这里的脚本实用的是TS语法-->
<script lang="ts">
// 第一步：导入 Person 组件
// import Count from './components/24.Count.vue';
import Person from './components/38.Person.vue';
//import Du from './components/26.Du01.vue';
// 第二步：完成子组件注册并导出根组件
export default {
  name: 'MyAppRoot',
  components: { Person }
};
</script>
<!--编写样式-->
<!--scoped 属性作用：将以下的css样式作为局部样式。最好不要作为全局样式：容易冲突-->
<style scoped>
     .hello{  
        background-color: aqua;
        box-shadow: 0 0 15px;
        border-radius:  15px;
        padding:15px;
     }
</style>