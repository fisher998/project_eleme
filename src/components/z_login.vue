<template>
    <div class="z_login">
        <h1></h1>
        <p class="z_time">Everything 30'</p>
        <div class="z_login_way">
            <router-link to="notelogin">
                短信登陆
            </router-link>
            <router-link to="psdlogin">
                密码登录
            </router-link>
        </div>
        
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
@import '../css/z_login.css';
</style>