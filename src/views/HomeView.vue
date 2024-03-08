<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../static/img/logo.png" />
        <span>良辰线上餐厅</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 菜单 -->
        <el-menu
          background-color="#373d41"
          text-color="#fff"
          active-text-color="#409eff">
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id" >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authname}}</span>
            </template>
            <el-menu-item :index="subitem.id+''" v-for="subitem in item.children" :key="subitem.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{subitem.authname}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      menulist:[]
    }
  },
  mounted(){
    this.$http.get("http://api.doc.jiyou-tech.com/mock/3979/home").then(result => {
      console.log(result.data);
      if(result.data.code !== 1) return this.$message.error("获取失败");
      this.menulist=result.data.data;
    })
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    margin-left: 15px;
    span {
      margin-left: 15px;
    }
  }
  img {
    height: 50px;
  }
}

.el-aside {
  background-color: #373d41;
}
.el-main {
  background-color: #eaedf1;
}
</style>