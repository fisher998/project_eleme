<template>
    <div>
        <div class="s_mine_header">
            <div class="s_mine_header_p">我的</div>
            <div class="s_mine_header_las">
                <!-- 登录页面 -->
                <!-- <router-link to="/login"> -->
                <router-link :to="is_login ? '/userInfo' : '/login'">
                <!-- 已登陆页面 -->
                <!-- <router-link to="/account"> -->
                    <h2>{{ msg }}</h2>
                    <!-- <h2>{{ msg1 }}</h2> -->
                </router-link>
                <p>{{ msg1 }}</p>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "s_mine_denglu",
    data () {
        return {
           msg: '登录/注册' ,
           msg1:  '登录后享受更多特权',
           is_login: false
        };
    },
    created() {
        // window.localStorage.removeItem('userInfo')
        // this.$router.push({path: '/login/notelogin'})
        if (window.localStorage.getItem('userInfo')) {
            this.is_login = true;
            this.msg = JSON.parse(window.localStorage.getItem('userInfo')).userName
            this.msg1 = JSON.parse(window.localStorage.getItem('userInfo')).userTel
        } else {
            this.msg = '登录/注册';
            this.msg1 = '登录后享受更多特权';
        }
    }
}
</script>
    
<style lang="css" scoped>
   @import '../css/s_mine_denglu.css';
</style>