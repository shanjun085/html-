<template>
    <!-- 父容器添加了filter滤镜样式 -->
    <div class="outer">
        <h2>App组件</h2>
        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd" alt="">
        <br>
        <!-- 父容器添加了filter滤镜样式，子组件的样式中有参照视口定位的样式，这个定位会受影响。 -->
        <Modal/>
    </div>
</template>

<script lang='ts' setup name="App">
    import Modal from './components/39.Modal.vue';
</script>

<style scoped>
.outer {
    background-color: #ddd;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px;
    width: 400px;
    height: 400px;
    /* 滤镜：添加了滤镜之后，内部的模态窗口定位会参考添加了滤镜的这个容器。 */
    filter: saturate(200%);
}
img {
    width: 180px;
}
</style>