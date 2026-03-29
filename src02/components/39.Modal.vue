<template>
    <button @click="isShow = true">显示弹窗</button>
    <!-- 传送走 -->
    <Teleport to="body">
        <div class="modal" v-show="isShow">
            <h2>我是弹窗的标题</h2>
            <p>我是弹窗的内容</p>
            <button @click="isShow = false">关闭弹窗</button>
        </div>
    </Teleport>
</template>

<script lang='ts' setup name="Modal">
    import { ref } from 'vue';

    let isShow = ref(false);
</script>

<style scoped>
.modal {
    width: 200px;
    height: 150px;
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px;
    text-align: center;

    /* 参考视口定位：那如果你要以为这是绝对的参考视口定位，你就错了！ */
    position: fixed;
    left: 50%;
    top: 20px;
    margin-left: -100px;
}
</style>