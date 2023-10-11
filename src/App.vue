<template>
  <div class="scrren">
    <el-container>
      <el-aside width="120px">
        <Navigation/>
      </el-aside>
      
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script lang="ts" setup>
import Layout from './views/HomeView.vue'
import Navigation from './components/Menu.vue'

</script>

<style scoped lang="scss">
.scrren{
  width: 100vw;
  height: 100vh;
}

</style>


<!-- <template>
  <div>
    
  </div>
</template>

<script>
</script>

<style>
</style> -->