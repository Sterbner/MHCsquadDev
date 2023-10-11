<template>
    <el-menu
    default-active="2"
      class="el-menu-vertical-demo"
      select="handleSelect"
      router
      unique-opened
    >
        <!-- <template v-for="(item,index) in navroute">
          <el-sub-menu>
            <template #title v-if="item.children">
                <span>1</span>
                <span>{{ item.name }}</span>
                <SubMeun :data="item.children"/>
            </template>
            <template #titile v-else>
                <span>2</span>
                <el-menu-item>{{ item.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>     -->

        <SubMeun v-for="(item) in navroute" :key="item.path" :data="item" :index="item.path"/>
    </el-menu>

</template>

<script setup lang="ts">
import SubMeun from './SubMenu.vue'
import { useRouter } from 'vue-router'
const route = useRouter();
const navroute = route.options.routes
const navroute2 = navroute[1].children
console.log(navroute2);
console.log('>>>>>>>>>');

console.log(route.options.routes);

</script>

<style scoped lang="scss">


</style>