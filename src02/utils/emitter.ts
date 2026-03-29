// 引入mitt
import mitt from "mitt";

// 调用mitt()方法返回emitter，emitter可以：绑定事件、触发事件
const emitter = mitt();


// 绑定事件
// 相当于向Map集合中储存key value
emitter.on('event1', () => {
    console.log('event1事件触发了');
});
emitter.on('event2', () => {
    console.log('event2事件触发了');
});

// 触发事件
setInterval(() => {
    //emit()方法就是遍历map集合，通过event1这个key找到对应的回调函数，自动执行回调函数。
    emitter.emit('event1');
    emitter.emit('event2');
}, 1000);

// 解绑事件
setTimeout(() => {
    //从Map集合中通过key移除键值对。
    //emitter.off('event1');
    //emitter.off('event2');
    // 解绑所有事件(把Map集合清空。)
    emitter.all.clear();
}, 3000)


// 暴露emitter
export default emitter;