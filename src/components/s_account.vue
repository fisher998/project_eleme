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
                用户名<span>{{ userName }}</span>
            </div>
            <p class="s_account_p">账号绑定</p>
            <div class="s_account_phone">
                手机<span>{{ userTel }}</span>
            </div>
            <p class="s_account_p">安全设置</p>
            <div class="s_account_mima">
                登录密码<span>未设置</span>
            </div>
            <div class="s_account_exit">
                <p @click="exit">退出登录</p>
            </div>
        </div>
       
    </div>
</template>
    
<script>
export default {
    name: "s_account",
    data () {
        return {
             userName: null,
             userTel: null
        };
    },
     methods: {
        back() {
            // this.$router.go(-1)
            history.back()
        },
        exit() {
            window.localStorage.removeItem('userInfo')
            this.$store.dispatch('exit')
            this.$router.push({path: '/mine'})
        }
    },
    created() {
        if (window.localStorage.getItem('userInfo')) {

            this.userName = JSON.parse(window.localStorage.getItem('userInfo')).userName
            this.userTel = JSON.parse(window.localStorage.getItem('userInfo')).userTel

        } else {
            var userTel = this.$store.getters.getTel;
        this.axios({
                method: 'get',
                url: 'http://10.0.157.249:8888/loginSuccess',
                params: {
                    tel: userTel,
                    // lastName: 'Flintstone'
                }
            })
                .then(res => {
                    console.log(res.data)
                    this.userName = res.data.userName;
                    this.userTel = res.data.userTel;
                    window.localStorage.setItem('userInfo', JSON.stringify(res.data))
                })
        }
        
        
    }
}
</script>
    
<style lang="css" scoped>
    @import '../css/s_account.css';
</style>