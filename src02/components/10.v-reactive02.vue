<template>
    <div>
        <h2>购物清单</h2>
        <ul>
            <li v-for="(item, index) in shoppingList" :key="item.id">
                {{ index + 1 }}. {{ item.name }} - 数量: {{ item.quantity }}
                <button @click="removeItem(index)">删除</button>
            </li>
        </ul>
        <button @click="changeFirstItemQuantity">将第一个商品的数量修改为5</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { ref } from 'vue'
//ref也可以包裹对象，被包裹的对象也是支持响应式的。
//但是ref函数使用的时候，在script脚本中编写代码比较麻烦。每次要加.value
//缺点是：程序员容易忘

/*      底层原理，
        1.ref可以实现原始类型的响应式。也可以使用对象/数组的响应式。
        2.ref包裹数组/对象的时候响应式是如何实现的？
            ref（{}）的视线远离？
                底层会先将{}对象使用reactive({})进行包裹
                生成Proxy对象，这个时候这个对象本身已经具有响应式了。
                但是由于代码中使用了ref（）进行了包裹，因此底层会再创造一个 RefImp 对象。然后将上面的 Proxy对象
                赋值给 RefImp对象的value属性
        3.如果是一个对象，拟采用ref进行包裹，缺点是什么？
            第一个：效率较低，因为底层进行了两次的包裹。
            第二个：每一次写代码还需要带着一个.value属性，容易网。
        4.最终结论
            建议：
            当是原始类型时，建议使用ref包裹。
            当是对象类型时，建议使用reactive播过
            reactive不能包裹原始类型，只能包裹对象/数组。

*/

    const shoppingList = ref([
        { id: 1, name: '苹果', quantity: 3 },
        { id: 2, name: '牛奶', quantity: 1 },
        { id: 3, name: '面包', quantity: 2 }
    ])

    function removeItem(index: number) {
        shoppingList.value.splice(index, 1);
    }

    const changeFirstItemQuantity = () => {
        // 取数组对象也需要 .value 才能取到
        shoppingList.value[0].quantity = 5;
    }
</script>