<template>
    <div>
    姓:<input type="text" v-model="firstName"><br/>
    名:<input type="text" v-model="lastName"><br/>
    </div>
    <div>全名:{{ getName ()}}</div>
</template>

<script lang='ts' setup>
 import {ref} from 'vue';
    const firstName = ref('zhang');
    const lastName =ref('san');

    //自定义函数(在函数当中处理复杂逻辑，将最终的数据返回)
    function getName(){
        //return""Zhang-san";
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.substring(1) + "-" +lastName.value
    }

</script>
   
<style scoped>
</style>