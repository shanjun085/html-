<template>
    <div>
    姓:<input type="text" v-model="firstName"><br/>
    名:<input type="text" v-model="lastName"><br/>
    </div>
    <div>全名:{{ getName ()}}</div>
    <div>全名:{{fullName}}</div>
</template>

<script lang='ts' setup>
 import {ref,computed} from 'vue';
    const firstName = ref('zhang');
    const lastName =ref('san');

    //自定义函数(在函数当中处理复杂逻辑，将最终的数据返回)
    function getName(){
        //return""Zhang-san";
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.substring(1) + "-" +lastName.value
    }
    
//只读的计算属性

//     let computedProperty = computed(()=>{
//     执行计算逻辑，只要计算属性关联的任意属性值发生变化，计算属性的函数就会被调用一次。
//     但如果计算属性关联的所有属性值都没有发生变化，计算属性的值会自动从缓存中获取。因此计算属性是支持缓存的。
//     return 值; // 这个值就是计算属性的值。
//   });
  const fullName = computed(() => {
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
    });
</script>
   
<style scoped>
</style>