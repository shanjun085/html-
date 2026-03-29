<template>
    <div class="person">
        <h3>Person组件</h3>
        <h4>消息: {{ msg }}</h4>
        <input type="text" v-model="msg">
    </div>
</template>

<script lang='ts' setup name="Person">
    import { customRef } from 'vue';

    // 立即发生响应式，没有延迟效果
    // let msg = ref('jack');

    // 注意：变量声明时，如果没有指定类型，TS是无法做类型推断的，需要指定类型。
    let timer: number;
    let initValue = 'hello';

    // 自定义ref
    let msg = customRef((track, trigger)=>{ // track跟踪，trigger触发
        return {
            // 响应式对象msg被读取时 get() 会被自动调用。
            get(){
                track(); // 嘿Vue，这个值有人在盯着，变化了要通知我
                return initValue;
            },
            // 响应式对象msg被修改时 set() 会被自动调用。
            // 参数value是新数据。
            set(value){
                clearTimeout(timer);
                timer = setTimeout(() => {
                    initValue = value;
                    trigger(); // 嘿Vue，这个值变了，快通知所有盯着它的人！
                }, 2000);
            }
        }
    });

</script>

<style scoped>
.person {
    background-color: rgb(184, 219, 61);
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
}
</style>