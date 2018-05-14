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
    <el-row>
      <!-- <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0"> -->
    <el-card :body-style="{ padding: '0px' }">
      <el-col :span="8" >
      <img src="../assets/liyifeng.jpg" class="image">
      </el-col>
      <el-col :span="16">
      <div style="padding: 14px;">
        <span>叫我李易峰</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">查看详细信息</el-button>
        </div>
      </div>
      </el-col>
    </el-card>
</el-row>
  </el-main>
</el-container>
</template>
<script>

export default {
    data() {
      return {
        activeName: 'matched_list'
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab.$options.propsData.name);
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

<style>
img {
  width:70%;
  height: 100%;
}
</style>
