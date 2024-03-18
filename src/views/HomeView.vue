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
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 菜单 -->
        <el-menu
          default-active="/welcome"
          background-color="#373d41"
          text-color="#fff"
          active-text-color="#409eff"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
        >
          <el-menu-item index="/welcome">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i :class="iconsObj[1]"></i>
              <span>菜品</span>
            </template>
            <el-menu-item
              :index="'/' + path[item.id]"
              v-for="item in menulist"
              :key="item.id"
            >
              <template slot="title">
                <i :class="iconsObj[item.id]"></i>
                <span>{{ item.authname }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <i :class="iconsObj[11]"></i>
            <span>首页</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 内容主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      menulist: [],
      path: {
        0: "welcome",
        1: "test",
        2: "ddde",
      },
      iconsObj: {
        1: "el-icon-user", 
        2: "el-icon-s-claim",
        11: "el-icon-goods",
        12: "el-icon-s-claim",
        13: "el-icon-user",
        14: "el-icon-goods",
      },
      isCollapse: false,
    };
  },
  mounted() {
    this.$http
      .get("http://api.doc.jiyou-tech.com/mock/3979/home")
      .then((result) => {
        console.log(result.data);
        if (result.data.code !== 1) return this.$message.error("获取失败");
        this.menulist = result.data.data;
      });
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    toggleCollapse() {
      //点击按钮收起折叠菜单
      this.isCollapse = !this.isCollapse;
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
  .el-menu {
    border-right: 0;
  }
}
.el-main {
  background-color: #eaedf1;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>