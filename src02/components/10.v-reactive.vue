<template>
    <div>
        <h2>购物清单</h2>
        <ul>
            <li v-for="(item, index) in shoppingList" :key="item.id">
                {{ index + 1 }}. {{ item.name }} - 数量: {{ item.quantity }}
                <button @click="removeItem(index)">删除</button>
            </li>
        </ul>
        <button @click="changeFirstItemQuantity">将第一个商品的数量修改为300</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
    import { reactive } from 'vue'
    //测试reactive能不能针对数组的操作形成响应式效果。
    //准备一个购物车
    //将数组定义为响应式对象。（当调用数组中相关的方法：例如push、reverse、pop、splice等数组方法执行时，响应式会继续追踪）
    const shoppingList = reactive([
        { id: 1, name: '苹果', quantity: 30 },
        { id: 2, name: '牛奶', quantity: 10 },
        { id: 3, name: '面包', quantity: 20 },
        { id: 3, name: '橘子', quantity: 20 },
        { id: 3, name: '哈密瓜', quantity: 20 }
    ])

    function removeItem(index: number) {
        shoppingList.splice(index, 1);
    }
    // 箭头函数也可以。
    const changeFirstItemQuantity = () => {
        shoppingList[0].quantity = 300;
    }
</script>
