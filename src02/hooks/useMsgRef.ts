import { customRef } from "vue";

export default function (initValue: string, delay: number) {
    let timer: number;
    // 自定义ref
    let msg = customRef((track, trigger) => { // track跟踪，trigger触发
        return {
            // 响应式对象msg被读取时 get() 会被自动调用。
            get() {
                track(); // 告诉Vue要持续跟踪该数据，一旦数据发生变化就去更新。
                return initValue;
            },
            // 响应式对象msg被修改时 set() 会被自动调用。
            // 参数value是新数据。
            set(value) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    trigger(); // 通知Vue数据被修改了。
                    initValue = value;
                }, delay);
            }
        }
    });
    return { msg };
}