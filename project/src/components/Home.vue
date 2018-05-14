<template>
<el-container>
  <el-header>
        <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="在线配对" name="match">在线配对</el-tab-pane>
    <el-tab-pane label="已配对列表" name="matched_list">已配对列表</el-tab-pane>
    <el-tab-pane label="用户中心" name="info">用户中心</el-tab-pane>
  </el-tabs>
 </el-header>
  <el-main>
      <el-row :gutter="10">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
      </el-row>
      <el-row :gutter="10">
      </el-row>
 
  </el-main>
</el-container>
</template>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<script>

export default {
    data() {
      return {
        activeName: 'match'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab.$options.propsData.name);
        if (tab.$options.propsData.name === 'match'){
            this.$router.push({path:'/match'})
        }else if (tab.$options.propsData.name === 'matched_list'){
            this.$router.push({path:'/list'})
        }else {
            this.$router.push({path:'/info'});
        }
      }
    }
};
</script>
