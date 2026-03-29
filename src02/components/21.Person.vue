<template>
    <h3>计数器：{{ count }}</h3>
    <button @click="increment">计数器加1</button>
    <br/>
    <img v-for="item in imgs" :src="item" alt="找不到图片">
    <br/>
    <button @click="addImg">添加图片</button>
</template>

<script lang='ts' setup name='PersonInfo'>
    import useImg from '../hooks/useImg';
    import useCount from '../hooks/useCount';
    // 调用函数useImg()，函数最终直接结束会返回一个对象，以下是对象解构语法。
    const { imgs, addImg } = useImg();
    const { count, increment } = useCount();
</script>

<style scoped>
img {
    width: 200px;
    margin: 0 5px;
}
</style>
