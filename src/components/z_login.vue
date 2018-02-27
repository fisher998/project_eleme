<template>
    <div class="z_login">
        <h1></h1>
        <p class="z_time">Everything 30'</p>
        <div class="z_login_way">
            <router-link to="/login/notelogin" :class="isBlue1">
                短信登陆
            </router-link>
            <router-link to="/login/psdlogin" :class="isBlue2">
                密码登录
            </router-link>
        </div>
        <router-view></router-view>
        <loginrefer></loginrefer>
    </div>
</template>

<script>
import noteLogin from './z_notelogin'
import psdLogin from './z_psdlogin'
import loginrefer from './z_login_refer'
    export default {
        data() {
            return {
                isblue: 'z_login_way_a'
            }
        },
        components: {
            noteLogin,
            psdLogin,
            loginrefer
        },
        computed: {
            isBlue1() {
                return /(notelogin)/.test(this.$route.path) ? this.isblue : ' ';
            },
            isBlue2() {
                return /(psdlogin)/.test(this.$route.path) ? this.isblue : ' ';
            }
        }
    }
</script>

<style scoped>
@import '../css/z_login.css';
.z_login_way_a{
    color: #1b9dff;
    border-bottom: 0.02rem solid #1b9dff;
}
</style>