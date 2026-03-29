<!-- 使用渲染函数时，template 会被忽略，界面完全由 setup 返回的函数决定 -->
<template></template>

<!-- 一般在script中定义数据，并且暴露数据给 template -->
<script lang="ts">
import { h } from 'vue';

export default {
    name: "PersonVue",
    setup() {
        //  let username = "李四";
        //  let phone = "18888888888";

        // function showPhone() {
        //     alert(phone);
        // }

        // setup 返回函数时，该函数即为渲染函数，需用 h() 创建 VNode，不能直接返回字符串
        return () =>
            h('div', { class: 'person' }, [
                h('h3', 'Person子组件'),
                h('p', null, '箭头函数渲染的页面'),
            ]);
    }
};
</script>

<style scoped>
.person {
    background-color: rgb(252, 152, 80);
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
}
</style>