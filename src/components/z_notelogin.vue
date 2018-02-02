<template>
    <div class="z_login_inputtext">
        <input type="number" placeholder="手机号" v-model="tel" />
        <button :disabled="isDisabled">获取验证码</button>
        <input type="number" placeholder="手机号" v-model="tel" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tel: ''
            }
        },
        computed: {
            isDisabled() {
                return this.tel.length == 11 ? false : true;
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
</style>