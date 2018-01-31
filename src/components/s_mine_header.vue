<template>
    <div>
        <div class="s_mine_header">
            <div class="s_mine_header_p">我的</div>
            <div class="s_mine_header_las">
                <h2>登录/注册</h2>
                <p>登录后享受更多特权</p>
            </div>
        </div>
        <div class="s_mine_instruc">
            <p>
                <img src="../img/s_mine_img/red.png" alt="">
                红包
            </p>
             <p>
                <img src="../img/s_mine_img/green.png" alt="">
                金币
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mine",
        data () {
            return {
                msg: "我的"
            }
        }
    }
</script>


<style scoped>
  @import '../css/s_mine_header.css';
</style>