import { defineStore } from "pinia";

//定义数据仓库
// useCountStore 本质是一个函数。
// 通过调用这个函数可以获取一个仓库Store对象。
const useCountStore = defineStore("count", {
    //选项式API，不是组合式API
    //数据
    state() {
        //这个对象自带响应式
        return {
            count: 1,
            n: 1
        };
    },
    // 方法(actions)
    actions: {
        add(): void {
            //在这里使用this,这个this代表了：countStore
            this.count += this.n
        },
        minus() {
            this.count -= this.n;
        }
    },

    // 计算属性
    getters: {
        //可以认为 getter方法中的方法名就是一个计算属性的属性名。
        bigCount(): number {
            return this.count * 10;
        }
    }
});

//导出仓库
//导出仓库是单例的。(整个应用只有一个。这样才可以完成多组件之间全局共享数据。)
export default useCountStore

//指定名字导出仓库
//export { useCountStore };