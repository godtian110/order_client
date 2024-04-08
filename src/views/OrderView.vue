<template>
    <div>
      <div style="padding: 10px 0">
        <el-input
          style="width: 200px"
          placeholder="请输入用户名"
          suffix-icon="el-icon-search"
          v-model="searchName"
        ></el-input>
        <el-button style="margin-left: 5px" type="primary" @click="search"
          >搜索</el-button
        >
      </div>
      <div style="margin: 10px 0">
        <el-table :data="tableData" border stripe>
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="id" label="编号" width="50"> </el-table-column>
          <el-table-column prop="username" label="用户名" width="120"> </el-table-column>
          <el-table-column prop="total" label="总金额" width="50">
          </el-table-column>
          <el-table-column prop="status" label="订单状态" width="120"> </el-table-column>
          <el-table-column prop="context" label="订单内容" width="120"> </el-table-column>
          <el-table-column prop="date" label="下单时间"> </el-table-column>
          <el-table-column label="操作">
            <template >
              <el-button type="warning" >编辑</el-button>
              <el-button type="danger" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </template>
      
      <script >
  export default {
    data() {
      const item = {
          id:1,
          userId:1,
          username:"金庸",
          total:15.00,
          status:"已下单",
          context:"米饭",
          date:"2024-04-07 23:40:00"
        };
      return {
        searchName: "",
        tableData: Array(20).fill(item),
      };
    },
    mounted: {},
    methods: {},
  };
  </script>
      
      <style lang="less" scoped>
  </style>