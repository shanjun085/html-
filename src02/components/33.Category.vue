<template>
    <div class="category">
        <h2>{{ title }}</h2>
        <!-- 默认插槽 -->
        <slot></slot>
    </div>
</template>

<script lang='ts' setup name="Category">
    defineProps(['title']);
</script>

<style scoped>
.category{
    /* 背景色 */
    background-color: skyblue;
    /* 圆角 */
    border-radius: 10px;
    /* 阴影 */
    box-shadow: 0 0 10px;
    /* 补丁 */
    padding: 10px;
    /* 宽 */
    width: 300px;
    /* 高 */
    height: 400px;
}
h2 {
    background-color: orange;
    text-align: center;
}
</style>