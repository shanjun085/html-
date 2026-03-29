<template>
    <div>
        <h3>计数器:{{ count }}</h3>
        <h3>计数器*10:{{ bigCount}}</h3>
        <div>
            <!--v-model 是双向数据绑定，并且 v-model 出现在标签中可以影响标签的value属性。-->
            <!-- option 的 value 在 HTML 里是字符串；用 .number 把选中的值转成数字，否则 + 会变成拼接字符串 -->
            <select v-model.number="countStore.n">
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
    import { storeToRefs } from 'pinia';
    import useCountStore from '../store/Count01';
    // 获取仓库对象
    // countStore是一个单例的仓库对象
    let countStore = useCountStore();

    //   获取数据
    console.log(countStore.count);
    console.log(countStore.$state.count);
    console.log(countStore.$state.n);
    console.log(countStore.n);
    
    
    //将countStore中的数据转换成ref对象
    let { count,n,bigCount } = storeToRefs(countStore);
    //方法
    function add(){
        //修改数据
        //第一种方式：一个一个修改
        //countStore.count += countStore.n;
        
        //第二种方式：批量修改
        // countStore.$patch({
        //     count:countStore.count + countStore.n
        // });

        //第三种方式：通过actions来修改。
        countStore.add();
    }

    function minus(){
        //countStore.count -= countStore.n
        countStore.minus();
    }
    
    //订阅仓库
    //当仓库中的任何一个数据发生变化时，回调函数执行。
    countStore.$subscribe((mutate,state)=>{
        //变更相关的信息。
        console.log(mutate);
        //变更之后的数据。
        console.log(state);
    });
</script>

<style scoped>
</style>

<!--
    使用pinia的操作方法
    1. npm i pinia
    2.main.ts文件中 createPinia();
    app.use(pinia)
    3.Count.ts,做Count.vue数据的集中管理
    4.使用 import
-->