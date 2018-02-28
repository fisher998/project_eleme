<template>
    <div>
        <div class="L_sale_header">            
            <div class="L_sale_header_up">
                <span></span>
                <h3>{{ str }}</h3>
                <span></span>
            </div>  
            <!-- <div class="searchBar" id="searchBar" :class="searchBarFixed ? 'isFixed' : ''">                -->
            <div id="nul">
                <div class="searchBar" id="searchBar" :class="{'isFixed' : searchBarFixed}">               
                    <div class="L_sale_header_down">
                        <div><span></span></div>
                        <span> 搜索商店、商品名称</span>
                    </div>
                </div> 
            </div>
                
             <div class="L_XSHD">
                <img src="../img/l_img/pic02.jpg" alt="">
            </div>
        </div>
    </div>
</template>
    
<script>
    import AMap from 'AMap';   //在页面中引入高德地图
    export default {
        name: "L_sale_header",
        data () {
            return {
                str: '定位中···',
                searchBarFixed: false
            };
        },
        created() {
            // /*---------------定位---------------*/ 
            // var mapObj = new AMap.Map('iCenter');
            // mapObj.plugin('AMap.Geolocation', function () {
            //     var geolocation = new AMap.Geolocation({
            //         enableHighAccuracy: true,//是否使用高精度定位，默认:true
            //         timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            //         maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            //         convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            //         showButton: true,        //显示定位按钮，默认：true
            //         buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
            //         buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            //         showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            //         showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
            //         panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            //         zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            //     });
            //     mapObj.addControl(geolocation);
            //     geolocation.getCurrentPosition();
            //     AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
            //     AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
                
            // });
            // //解析定位结果
            // var _this = this;
            // var lnglatXY = []; //已知点坐标
            // function onComplete(data) {
            //     // this.str=['定位成功'];
            //     lnglatXY.push(data.position.getLng());
            //     lnglatXY.push(data.position.getLat());
            //     // if(data.accuracy){
            //         // _this.str.push('精度：' + data.accuracy + ' 米');
            //     // }//如为IP精确定位结果则没有精度信息
            //     // _this.str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));

            //     // 显示地址信息
            //     // function regeocoder() {  //逆地理编码
            //         var geocoder = new AMap.Geocoder({
            //             radius: 1000,
            //             extensions: "all"
            //         });        
            //         geocoder.getAddress(lnglatXY, function(status, result) {
            //             if (status === 'complete' && result.info === 'OK') {
            //                 geocoder_CallBack(result);
            //             }
            //         });        
            //         // var marker = new AMap.Marker({  //加点
            //         //     map: map,
            //         //     position: lnglatXY
            //         // });
            //         map.setFitView();
            //     // }
            //     function geocoder_CallBack(data) {
            //         var address = data.regeocode.formattedAddress; //返回地址描述
            //         _this.str = address;
            //     }

            // }
            // //解析定位错误信息
            // function onError(data) {
            //     console.log('定位失败');
            // }

            
        },
        methods:{
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                //  console.log(scrollTop);
                // var offsetTop = document.querySelector('#searchBar').offsetTop;
                //  console.log(offsetTop);

                if (scrollTop > 44) {
                    this.searchBarFixed = true
                } else {
                    this.searchBarFixed = false
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
             /*---------------定位---------------*/ 
            var mapObj = new AMap.Map('iCenter');
            mapObj.plugin('AMap.Geolocation', function () {
                var geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                    convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                    showButton: true,        //显示定位按钮，默认：true
                    buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
                    buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                    showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                    panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                    zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                });
                mapObj.addControl(geolocation);
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
                AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
                
            });
            //解析定位结果
            var _this = this;
            var lnglatXY = []; //已知点坐标
            function onComplete(data) {
                lnglatXY.push(data.position.getLng());
                lnglatXY.push(data.position.getLat());
                var geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "all"
                });        
                geocoder.getAddress(lnglatXY, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        geocoder_CallBack(result);
                    }
                });        
            }
            function geocoder_CallBack(data) {
                var address = data.regeocode.formattedAddress; //返回地址描述
                _this.str = address;
            }
            //解析定位错误信息
            function onError(data) {
                // console.log('定位失败');
                _this.str = '定位失败';
            }
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>
    
<style scoped>
    .L_sale_header{
        overflow: hidden;
        background-image: linear-gradient(90deg,#0af,#0085ff);
    }
    .L_sale_header_up{
        padding: 0.35rem 0.21rem 0 0.21rem;
        color: white;
        overflow: hidden;
    }
    .L_sale_header_up span:first-child{
        width: 0.28rem;
        height: .34rem;
        display: inline-block;
        float: left;
        background:url(../img/l_img/L_map.png)no-repeat left center;
        margin: 0.1rem;
        background-size: 100% 100%;
    }
    .L_sale_header_up h3{
        margin: 0;
        height: .5rem;
        line-height: .5rem;
        width: 2.46rem;
        float: left;
        font-size: .32rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .L_sale_header_up span:last-child{
        width: 0.25rem;
        height: 0.29rem;
        display: inline-block;
        float: left;
        margin: .1rem;
        background: url(../img/l_img/icon.png)no-repeat left center;
    }
    .L_XSHD{
        width: 100%;
        height: 2.09rem;
    }
    .L_XSHD img{
        width: 100%;
        height: 100%;
    }
    #nul{
        width: 6.75rem;
        height: .72rem;
        margin: .2rem auto;
        background-image: linear-gradient(90deg,#0af,#0085ff);
    }
    .searchBar{
        background: linear-gradient(90deg,#0af,#0085ff);
    }
    .L_sale_header_down{
        width: 6.75rem;
        height: .72rem;
        margin: .2rem auto;
        line-height: 0.72rem;
        background:white;
        text-align: center;
    }
    .L_sale_header_down div{
        display: inline-block;
        height: .72rem;
    }
    .L_sale_header_down div span{
        background: url(../img/l_img/search.png)no-repeat left center;
        background-size: 100% 100%;
        display: inline-block;
        width: 0.3rem;
        height:0.3rem;   
        margin: -.07rem;    
    }  
    .L_sale_header_down>span{
        color: #999;
        font-family: simsun;        
        display: inline-block;
    }  
    .isFixed{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(90deg,#0af,#0085ff);
    }
</style>