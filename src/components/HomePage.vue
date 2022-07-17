<template>
    <div class="home">
        <div class="top">
            <div>
                Sạch từ nguyên liệu đầu vào
            </div>
            <div>
                Sản xuất bằng tâm huyết và trí tuệ
            </div>
            <div>
                Lựa chọn tuyệt vời cho sức khoẻ
            </div>
        </div>

        <div class="carousel">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide><img alt="image1" src="../assets/1.png"></swiper-slide>
                <swiper-slide><img alt="image2" src="../assets/2.png"></swiper-slide>
                <swiper-slide><img alt="image3" src="../assets/3.png"></swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
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

.top {
    float: left;
    position: absolute;
    top: 40%;
    font-size: 1.3em;
}

.top div {
    margin: 20px;
}

.carousel {
    margin: 0 30px;
    max-width: 60%;
    /* border: 1px solid red; */
    float: right;
}

.home {
    width: 60vw;
    margin: 0 auto;
    border: 1px solid red;
}

.swiper-button-next, .swiper-button-prev {
    --swiper-navigation-color: #64906C !important;
    --swiper-navigation-size: 55px !important;
}


</style>