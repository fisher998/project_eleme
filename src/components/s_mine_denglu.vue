<template>
    <div>
        <div class="s_mine_header">
            <div class="s_mine_header_p">我的</div>
            <div class="s_mine_header_las">
                <!-- 登录页面 -->
                <router-link to="/login">
                <!-- 已登陆页面 -->
                <!-- <router-link to="/account"> -->
                    <h2>{{ msg }}</h2>
                </router-link>
                <p>登录后享受更多特权</p>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "s_mine_denglu",
    data () {
        return {
           msg: '登录/注册'  
        };
    }
}
</script>
    
<style lang="css" scoped>
   @import '../css/s_mine_denglu.css';
</style>