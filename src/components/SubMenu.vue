<!-- <template>
    <template v-for="(item,index) in routedata">
        <template v-if="item.children">
            <span>{{ item.name }}</span>
        <SubMenu :data="item.children"/>
        </template>
        <template v-else>
            <el-menu-item >{{ item.name }}</el-menu-item>
        </template>
    </template>
</template> -->

<template>
    <el-sub-menu :index="data.path" v-if="data?.children" class="parent">
        <template #title>
            <span>{{ data.name }}</span>
        </template>
        <SubMenu v-for="item in data.children" :data="item" :key="item.path"/>
    </el-sub-menu>
    <el-menu-item v-else :index="data?.path" class="child" >
        <template #title>
            {{ data.name }}
        </template>
    </el-menu-item>
</template>

<!-- <template>
    
</template> -->




<script setup lang="ts">
import SubMenu from "./SubMenu.vue"
// import { defineProps } from 'vue';
defineProps({
    data:{
        type:Object,
        default:()=>{}
    }
})

</script>

<style scoped lang="scss">
.parent{
    width: 100%;
}

</style>