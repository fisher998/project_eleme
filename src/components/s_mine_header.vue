<template>
    <div>
        <div class="s_mine_instruc">
            <router-link :to="'/s_mine_header_redPaper/'"><p><img src="../img/s_mine_img/red.png" alt="">红包</p></router-link>
            <p><img src="../img/s_mine_img/green.png" alt="">金币 </p>
            <router-view></router-view>
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
        },
        methods: {
            s_mine_instruc_red() {
                console.log(123);
            }
        },
        components: {
        }
    }
</script>


<style scoped>
  @import '../css/s_mine_header.css';
</style>