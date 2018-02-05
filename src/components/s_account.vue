<template>
    <div>
        <div class="s_account">
            <div class="s_account_div">
                <img src="../img/s_mine_img/big_jiao.png" alt="" @click="back">
                账户信息
            </div>
            <div class="s_account_pic">
                头像<img src="../img/s_mine_img/s_2.png" alt="">
            </div>
            <div class="s_account_name">
                用户名<span>4nv4n85565</span>
            </div>
            <p class="s_account_p">账号绑定</p>
            <div class="s_account_phone">
                手机<span>150****8518</span>
            </div>
            <p class="s_account_p">安全设置</p>
            <div class="s_account_mima">
                登录密码<span>未设置</span>
            </div>
            <div class="s_account_exit">
                <p>退出登录</p>
            </div>
        </div>
       
    </div>
</template>
    
<script>
export default {
    name: "s_account",
    data () {
        return {
             
        };
    },
     methods: {
        back() {
            // this.$router.go(-1)
            history.back()
        }
    }
}
</script>
    
<style lang="css" scoped>
      @import '../css/s_account.css';
</style>