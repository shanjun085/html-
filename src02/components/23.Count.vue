<template>
    <div>
        <h3>计数器:{{ count }}</h3>
        <div>
            <!--v-model 是双向数据绑定，并且 v-model 出现在标签中可以影响标签的value属性。-->
            <!-- option 的 value 在 HTML 里是字符串；用 .number 把选中的值转成数字，否则 + 会变成拼接字符串 -->
            <select v-model.number="n">
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
            </select>
        </div>
        <div>
            <button @click="add">+</button>
        </div>
        <div>
            <button @click="minus">-</button>
        </div>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';

    import useCountStore from '../store/Count';
    // 获取仓库对象
    // countStore是一个单例的仓库对象
    let countStore = useCountStore();

    //数据
    let count = ref(1);
    let n = ref(1);

    //方法
    function add(){
        count.value += n.value;
    }

    function minus(){
        count.value -= n.value;
    }
</script>

<style scoped>
</style>
