<template>
    <div class="parent">
        <h1>父组件</h1>
        <div class="content">
            <Category title="今日新闻热点">
                <!-- 这里的内容将会放到插槽上 -->
                 <ul>
                    <li v-for="news in newsList" :key="news.id">
                        {{ news.content }}
                    </li>
                 </ul>
            </Category>
            <Category title="今日美食推荐">
                <!-- 这里的内容将会放到插槽上 -->
                <img :src="imgUrl" alt="美食图片加载失败">
            </Category>
            <Category title="今日影视推荐">
                <!-- 这里的内容将会放到插槽上 -->
                <!-- controls 用来控制视频是否可以操作播放等 -->
                <video :src="movieUrl" controls></video>
            </Category>
        </div>
    </div>
</template>

<script lang='ts' setup name="Parent">
    import Category from './33.Category.vue';

    // 新闻列表
    let newsList = [
        {id: 'news001', content: '澳总理发帖晒图：很荣幸参观中国长城'},
        {id: 'news002', content: '特朗普改口：无意炒掉美联储'},
        {id: 'news003', content: '巴西一11岁女孩拔牙时发现81颗牙齿'},
        {id: 'news004', content: '亚马尔与巴萨正式续约 新赛季将身披10号球衣'},
        {id: 'news005', content: '听孙颖莎说，而不是替她说'}
    ];

    // 美食图片
    let imgUrl = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd';

    // 影视视频
    let movieUrl = 'https://images-assets.nasa.gov/video/One%20Small%20Step/One%20Small%20Step~orig.mp4';
</script>

<style scoped>
.parent{
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px;
    background-color: rgb(219, 240, 248);
    width: 60%;
}
.content {
    /* 三个东西横向排开 */
    display: flex;
    /* 主轴对齐方式：均分开 */
    justify-content: space-evenly;
}
img, video {
    width: 100%;
}
</style>