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
      <div>
        <el-button icon="el-icon-arrow-right">个人信息</el-button>
        </div>
    </el-row>
    <el-row>
      <div>
        <el-button icon="el-icon-arrow-right">修改头像</el-button>
      </div>
    </el-row>
    <el-row>
      <div>
        <el-button icon="el-icon-arrow-right">修改信息</el-button>
      </div>
    </el-row>
     <el-row>
      <div>
        <el-button type="danger" icon="el-icon-arrow-right">退出登录</el-button>
      </div>
    </el-row>
  </el-main>
</el-container>
</template>



<style>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-tab-pane{
    disabled:true;
  }
  .el-button{
    width:100%;
  }
</style>

<script>

export default {
    data() {
      return {
        activeName: 'info'
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