<template>
    <div class="mine">
        <sMineHeader></sMineHeader>
    </div>
</template>

<script>
// 导入子组件的header文件
import sMineHeader from './s_mine_header.vue'
    export default {
        name: "mine",
        data () {
            return {
                msg: "我的"
            }
        },
        components: {
            // 用的的子组件
            sMineHeader

        }
    }
</script>

<style scoped>
    h1{
        color: greenyellow;
    }
</style>