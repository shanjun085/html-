<template>
    <div class="son">
        <h2>子组件1</h2>
        <h4>账户余额：{{ balance }}</h4>
        <!-- $parent 是内置的直接用，获取的是当前组件的父组件实例 -->
        <button @click="giveAll($parent)">把钱都给父亲</button>
    </div>
</template>

<script lang='ts' setup name="Son1">
    import { ref } from 'vue';

    let balance = ref(2000);

    function giveAll(parent: any){
        parent.balance += balance.value;
        //自己的钱全部清空
        balance.value = 0;
    }

    // 对外暴露数据
    defineExpose({balance});
</script>

<style scoped>
.son{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(3, 213, 250);
}
</style>