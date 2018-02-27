<template>
    <div class="z_login_inputtext">
        <input type="number" placeholder="手机号" v-model.number="tel" />
        <button :disabled="isDisabled" @click="createYzm">获取验证码</button>
        <input type="number" placeholder="验证码" v-model="yzm" />
        <p class="warning">
            温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
            <span>《用户服务协议》</span>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tel: '',
                yzm: null,
                createyzm: null
            }
        },
        methods: {
            createYzm() {
                this.createyzm = Math.floor(Math.random() * 1000000);
                // 验证码
                this.yzm = this.createyzm;
                this.$store.dispatch('add', this.tel)
                console.log(this.$store.getters.getTel)
            }
        },
        computed: {
            isDisabled() {
                return (this.tel + '').length == 11 ? false : true;
            }
        }
    }
</script>

<style scoped>
.z_login_inputtext{
    width: 100%;
    padding-left: 0.76rem;
    position: relative;
}
.z_login_inputtext>input[type="number"]{
    width: 6rem;
    height: 0.96rem;
    border: 0.02rem solid #dddddd;
    border-radius: 0.08rem;
    margin: 0.18rem auto 0.32rem auto;
    text-indent: 0.24rem;
}
.z_login_inputtext>button{
    border: none;
    outline: none;
    position: absolute;
    top: 0.5rem;
    right: 0.94rem;
    background: #fff;
    color: #ccccd7;
}
.disabled{
    border: none;
    outline: none;
    position: absolute;
    top: 0.5rem;
    right: 0.94rem;
    background: #fff;
    color: greenyellow;
}
.warning{
    width: 6rem;
    font-size: 0.28rem;
    color: cccccc;
}
.warning span{
    color: #2395ff;
}
</style>