<template>
    <div class="z_temp_header">
        <h3><span class="z_one"></span><i class="z_zan"></i>{{ msg }}<span class="z_two"></span></h3>
        <p class="z_battle">金币换好礼</p>
        
        <find-more></find-more>
    </div>
</template>

<script>

    import findMore from './z_find_more'
    export default {
        data() {
            return {
                msg: "限时好礼"
            }
        },
        components: {
            findMore
        }
    }
</script>

<style scoped>
@import '../css/z_find_info_temp.css';
</style>