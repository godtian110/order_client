<template>
  <div>
    <el-carousel :interval="4000" type="card" height="350px">
      <el-carousel-item v-for="item in picture" :key="item.id">
        <h3 class="medium">
          <el-image :src="item.url" fit="fill"></el-image>
        </h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 通知区域 -->
    <div class="xiamian">
      <div class="notice" >
        <h4>通知</h4>
        <div v-for="item in notice" :key="item.id" index>
          <p>{{item.id}}.{{item.title}}:{{item.content}}</p>
        </div>
      </div>
      <div class="time">
        <h4>营业时间</h4>
        <p>工作日：8:00-22：00</p>
        <p>非工作日：全天营业</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picture: [
        {
          id: 1,
          url: "https://img1.baidu.com/it/u=574542326,3599303788&fm=253&fmt=auto?w=845&h=476",
        },
        {
          id: 2,
          url: "https://img2.baidu.com/it/u=3644856578,3745219299&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        },
        {
          id: 3,
          url: "https://n.sinaimg.cn/sinacn23/310/w1600h1110/20180529/5659-hcffhsv2947800.jpg",
        },
        {
          id: 4,
          url: "https://img0.baidu.com/it/u=1491236235,1012323777&fm=253&fmt=auto&app=138&f=PNG?w=654&h=500",
        },
      ],
      notice: [
        {
          id: 1,
          title: "通知",
          content: "这是一条通知",
        },
        {
          id: 2,
          title: "通知",
          content: "这是一条通知",
        },
        {
          id: 3,
          title: "通知",
          content: "这是一条通知",
        },
      ],
    };
  },
};
</script>


<style lang="less">
.el-carousel__item h3 {
  font-size: 14px;
  line-height: 200px;
  margin: 0;
}
.xiamian {
  display: flex;
  width: 100%;
  .notice {
    width: 50%;
    border: 1px solid black;
    border-radius: 20px;
    margin-right: 10%;
    text-align: left;
    padding-left: 10px;
  }
  .time{
    width: 40%;
    height: 100x;
    border-radius: 20px;
    border: 1px solid black;
  }
}
</style>