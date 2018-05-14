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
            <el-carousel :interval="4000" type="card"   autoplay=false>
                <el-carousel-item v-for="s in images" :key="s">
                    <el-row :gutter="20">
                    <img v-bind:src="s.url" class="image">
                    </el-row>
                    <el-row :gutter="20">
                        {{s.name}}
                    </el-row>
                </el-carousel-item>
            </el-carousel>
      </el-row>
      <el-row :gutter="30">
          <el-col :span="8">
              <el-button icon="el-icon-close"></el-button>
          </el-col>
          <el-col :span="8">
              <el-button icon="el-icon-refresh"></el-button>
          </el-col>
          <el-col :span="8">
              <el-button icon="el-icon-check"></el-button>
          </el-col>

      </el-row>
 
  </el-main>
</el-container>
</template>
<style>
.el-carousel__item{
    height:240px;
}
  
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
  img {
      width:100%;
      height:70%;
  }
</style>
<script>

export default {
    data() {
      return {
        activeName: 'match',
        images:[{url:require("../assets/1.jpg"), name:"小猪佩奇"},
        {url:require("../assets/2.jpg"),name:"星期五我有空呀"},
        {url:require("../assets/3.jpg"), name:"良辰"},
        {url:require("../assets/4.jpg"),name:"西文女青女"},
        {url:require("../assets/5.jpg"),name:"萌萌哒"},
        {url:require("../assets/6.jpg"),name:"快到碗里来"}]
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