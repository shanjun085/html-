<template>
    <div class="son">
      <h3>子组件</h3>
      <h4>姓名：{{ name }}</h4>
      <h4>年龄：{{ age }}</h4>
      <ul>
        <li v-for="person in list" :key="person.id">
          {{ person.id }},{{ person.name }},{{ person.age }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
    //9.定义类型
    interface Person {
      id:number | string,
      name: string,
      age: number
    }

    //全局注册的函数，可以直接使用
    //接收父组件传递过来的数据
    //这是数组，数组中每个元素是一个字符串。
    //这个字符串不能随便写，必须是父组件中传递数据的使用属性名。
    //defineProps(["name","age","list"]);

    //如果需要在script当中接收数据，可以直接使用变量接收definProps全局函数的返回值。
    //let obj = defineProps(["name","age","list"]);

    //console.log(obj.name,obj.age,obj.list);

    //限定父组件传递过来的数据类型。以及必要性。
    //let obj = defineProps<对象类型来限定父组件传递过来的数据>();

    //使用?来限制必要性。
    //let obj = defineProps<{ name: string; age: number; list?: Person[] }>();

    //指定默认值。(如果父组件没有给我传递数据，我子组件自己指定默认值。)
    withDefaults(defineProps<{ name: string; age: number; list?: Person[] }>(),{
      list: ()=> [
        {id:1,name:"张三",age:20},
        {id:1,name:"李四",age:22},
      ]
    });
</script>
  
  <style scoped>
  .son {
    background-color: rgb(124, 219, 250);
    box-shadow: 0 0 15px;
    border-radius: 15px;
    padding: 15px;
  }
  </style>