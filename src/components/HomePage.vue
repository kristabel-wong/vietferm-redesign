<template>
    <div class="home">
        <div class="flex">
            <div class="top">
                <div>
                    <img alt="image7" class="logo" src="../assets/7.png">
                    Làm từ thành phần tự nhiên
                </div>
                <div>
                    <img alt="image8" class="logo" src="../assets/8.png">
                    Sản xuất bằng tâm huyết và trí tuệ
                </div>
                <div>
                    <img alt="image9" class="logo" src="../assets/9.png">
                    Lựa chọn tuyệt vời cho sức khoẻ
                </div>
            </div>

            <div class="carousel">
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide> <div class="img-contain"><img alt="image1" src="../assets/1.png"></div></swiper-slide>
                    <swiper-slide> <div class="img-contain"><img alt="image2" src="../assets/2.jpeg"></div></swiper-slide>
                    <swiper-slide> <div class="img-contain"><img alt="image3" src="../assets/3.png"></div></swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </div>
        <div>
            <div class="images">
                <div class="text">
                    <div>
                        <span>Sức khoẻ </span> của người dùng là ưu tiên hàng đầu.
                    </div>
                    <div>
                        Mỗi sản phẩm đều là <span> tâm huyết </span> và sự tự hào.
                    </div>
                    <div>
                        Lưu giữ <span> hương vị truyền thống </span> trong suốt 30 năm.
                    </div>
                </div>
                <img alt="image4" src="../assets/4.png">
                <img alt="image5" src="../assets/5.png">
                <img alt="image6" src="../assets/6.png">
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
    name: 'HomePage',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOption: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
    width: 70vw;
    margin: 0 auto;
    border: 1px solid red;
}

.flex {
    display: flex;
    justify-content: space-between;
}

.top {
    margin-top: 10%;
    font-size: 1.5em;
    /* border: 1px solid red; */
    width: 50%;
    padding: 0 20px;
}

.top div, .text div {
    margin: 20px;
}

.carousel {
    /* margin: 0 30px; */
    max-width: 670px;
    /* border: 1px solid red; */
}

.carousel img {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.img-contain {
    box-sizing: border-box;
    width: 500px;
    height: 650px;
    margin: 0 auto;
}

.images {
    margin: 60px 0;
    position: relative;
    /* border: 3px solid pink; */
}

.images img {
    margin: 0 10px;
}

.text {
    position: absolute;
    font-size: 1.3em;
    text-align: right;
    /* border: 1px solid red; */
    /* width: 50%; */
    right: 20px;
    color: #7C848C;
}

span {
    color: #F0BB4A
}

.swiper-button-next, .swiper-button-prev {
    --swiper-navigation-color: #64906C !important;
    --swiper-navigation-size: 55px !important;
}

.logo {
    height: 50px;
    display: block;
    margin: 10px auto;
}

</style>