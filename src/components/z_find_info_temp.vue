<template>
    <div class="z_temp_header">
        <h3><span class="z_one"></span><i class="z_zan"></i>{{ msg }}<span class="z_two"></span></h3>
        <p>您的口味,我都懂得</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "为你推荐"
            }
        }
    }
</script>

<style scoped>
@import '../css/z_find_info_temp.css';
</style>