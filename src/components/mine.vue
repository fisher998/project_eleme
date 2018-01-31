<template>
    <div class="mine">
        <sMineHeader></sMineHeader>
        <sMineList></sMineList>
    </div>
</template>

<script>
// 导入子组件的header文件
import sMineHeader from './s_mine_header.vue'
import sMineList from './s_mine_list.vue'
    export default {
        name: "mine",
        data () {
            return {
                msg: "我的"
            }
        },
        components: {
            // 用的的子组件
            sMineHeader,
            sMineList

        }
    }
</script>

<style scoped>
    h1{
        color: greenyellow;
    }
</style>