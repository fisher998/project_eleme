<template>
    <div class="z_box_loginto">
        <router-link :to="userInfo">
            <button class="z_loginto" @click="login">登录</button>
        </router-link>
        <p class="z_about"><a href="javascript:void(0);">关于我们</a></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: '/login/notelogin',
            userName:null,
            userTel: null
        }
    },
    methods: {
        login() {
            var userTel = this.$store.getters.getTel;
            console.log(userTel);
            // this.axios.post('http://10.0.157.249:8888/login', userObj);
            // this.axios.get('http://10.0.157.221:8888/login', {
            //     params: {
            //         userName: 1111
            //     }
            // }).then( res => {

            // })
            this.axios({
                method: 'get',
                url: 'http://10.0.157.249:8888/login',
                params: {
                    tel: userTel,
                    // lastName: 'Flintstone'
                }
            })
                .then(res => {
                    // console.log(res)
                    if (res.data.vector == false) {
                        alert(res.data.userName);
                    } else {
                        window.localStorage.setItem('userInfo', JSON.stringify(res.data))
                        this.userInfo = '/userInfo';
                        // this.$router.push({ path: '/userInfo' });
                        this.$router.push({path: '/mine'})
                    }
                })
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

