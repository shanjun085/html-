<template>
    <h3>语文成绩:{{ chineseScore }}</h3>
    <h3>数学成绩:{{ mathScore }}</h3>
    <button @click="changeChineseScore">修改语文成绩</button>
    <button @click="changeMathScore">修改数学成绩</button>
</template>

<script lang='ts' setup>
    import { ref,  watchEffect } from 'vue';
    let chineseScore = ref(0);
    let mathScore = ref(0);

    function changeChineseScore(){
        if(chineseScore.value <100) {
            chineseScore.value += 10;
        }
    }
    function changeMathScore(){
        if(mathScore.value <100) {
            mathScore.value += 10;
        }
    }
    
    
    /*
    //使用 watch监视语文成绩和数学成绩
    watch([chineseScore,mathScore],(val)=>{
    let [a, b] = val;
    if(a >= 90 && b>=90){
        console.log("优秀")
    }else if(a >= 80 &&b >=80){
        console.log("良好");
    }else if(a >=60 && b>=60){
        console.log("及格");
    }else{
        console.log("不及格");
    }
    },{});*/

    //模糊监视
    //只要回调函数中的属性值发生变化，这个监视器就会执行。
    watchEffect(()=>{
        if(chineseScore.value >= 90 && mathScore.value>=90){
        console.log("优秀")
    }else if(chineseScore.value  >= 80 && mathScore.value >=80){
        console.log("良好");
    }else if(chineseScore.value  >=60 && mathScore.value>=60){
        console.log("及格");
    }else{
        console.log("不及格");
    }
    })
</script>

<style scoped>
    button{
        margin: 0 5px;
    }
</style>