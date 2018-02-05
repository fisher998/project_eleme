<template>
    <div class="z_box_loginto">
        <button class="z_loginto" @click="login">登录</button>
        <p class="z_about"><a href="#">关于我们</a></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', )
        }
    }
}
</script>

<style lang="css" scoped>
.z_box_loginto{
    width: 6rem;
    margin: 0.6rem auto 0 auto;
}
.z_loginto{
    width: 6rem;
    height: 0.84rem;
    border: none;
    background: #4cd96f;
    color: #fff;
    margin-bottom: 0.45rem;
    outline: none;
}
.z_about{
    text-align: center;
}
.z_about>a{
    color: #999999;
}
</style>

