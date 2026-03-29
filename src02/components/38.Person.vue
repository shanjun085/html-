<template>
    <div class="person">
        <h3>Person组件</h3>
        <h4>立即响应式消息: {{ msg2 }}</h4>
        <input type="text" v-model="msg2">
        <hr>
        <h4>延迟性响应式消息: {{ msg }}</h4>
        <input type="text" v-model="msg">
    </div>
</template>

<script lang='ts' setup name="Person">
    import { ref } from 'vue';
    import useMsgRef from '../hooks/useMsgRef';

    let msg2 = ref('hello');

    // 注意：返回值要解构哦。
    let {msg} = useMsgRef('hello', 3000);

</script>

<style scoped>
.person {
    background-color: rgb(184, 219, 61);
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
}
</style>