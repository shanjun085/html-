<template>
    <div>
        <ul>
            <li>姓名：{{person.name}}</li>
            <li>年龄：{{person.age}}</li>
        </ul>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改用户信息</button>
    </div>
</template>

<script lang='ts' setup>
    import { reactive } from 'vue';
    //响应式什么情况下会丢失？只要对象的引用发生变化，指向了一个新对象，响应式就会丢失。
    //当前是响应式的。
    //注意：RESTful接口返回的数据，不要将数据直接赋值个 person 引用。这样会导致响应式效果丢失。
    //建议：在对象中设置一个属性data,这个data属性用来专门接受RESTful返回的数据。
    let person = reactive({name: 'jack', age: 20});

    const changeName = () => {
        person.name = 'jackson';
    }

    const changeAge = () => {
        person.age++;
    }

    const changePerson = () => {

        // 响应式失效
        //person = {name: 'lucy', age: 18};

        // 响应式同样失效，因为压根就不是同一个对象
        //person = reactive({name: 'lucy', age: 18});

        // 可以采用最笨的办法，一个属性一个属性修改
        //person.name = 'lucy';
        //person.age = 18;

        // 也可以这样做
        //这个代码的作用是不会改变对象的地址的，只是将person对象中属性的值修改一下。
        Object.assign(person, {name: 'lucy', age: 18});
    }

</script>

<style scoped>
button{
    margin-right: 10px;
}
</style>