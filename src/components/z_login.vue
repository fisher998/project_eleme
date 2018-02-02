<template>
    <div class="z_login">
        <h1></h1>
        <p class="z_time">Everything 30'</p>
        <div class="z_login_way">
            <router-link to="/login/notelogin">
                短信登陆
            </router-link>
            <router-link to="/login/psdlogin">
                密码登录
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import noteLogin from './z_notelogin'
import psdLogin from './z_psdLogin'
    export default {
        data() {
            return {

            }
        },
        components: {
            noteLogin,
            psdLogin
        }
    }
</script>

<style scoped>
@import '../css/z_login.css';
</style>