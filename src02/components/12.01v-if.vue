<template>
    <div>

        <!-- 模板的插值语法中可以使用表达式-->
        <h3>{{ 1+2 }}</h3>
        <!--
            v-if="true"显示元素
            v-if="false"直接将元素从dom树上删除，达到隐藏效果
        -->
        <div v-if="flag">我是一个DIV元素</div>
        <!--
            v-show="true" 显示元素
            v-show="false" 将元素的display样式设置为none，以达到隐藏的效果，但是元素不会从dom树上删除;
        -->
        <div v-show="flag">我是一个DIV元素222</div>
        <div v-if="isLoggedIn">欢迎回来！</div>
        <div v-else>请先登录</div>

        <!--指令后面也可以使用表达式,不建议使用过难的表达式，若有需求则可以在script里面调用function函数-->
        <div v-if="score >= 90">优秀</div>
        <div v-else-if="score >= 60">及格</div>
        <div v-else>不及格</div>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';

    //响应式的
    const flag =ref(true);
    const isLoggedIn = ref(false);
    const score = ref(85);
</script>

<style scoped>
 button {
    margin-right: 10px;
 }
</style>