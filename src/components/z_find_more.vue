<template>
    <div class="z_find_more">
        <router-link to="">
            <p class="z_more_info">
                查看更多
                <span></span>
            </p>

        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .z_find_more{
        width: 100%;
        height: 1.06rem;
        line-height: 1.06rem;
    }
    .z_more_info{
        color: #9aa0a0;
        font-size: 0.26rem;
        text-align: center;
    }
    /* .z_more_info>span{

    } */
</style>