<template>
    <div class="home">
        <div class="flex">
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
    width: 60vw;
    margin: 0 auto;
    /* border: 1px solid red; */
}

.flex {
    display: flex;
    justify-content: space-between;
}

.top {
    margin-top: 10%;
    font-size: 1.3em;
    /* border: 1px solid red; */
    width: 50%;
}

.top div, .text div {
    margin: 20px;
}

.carousel {
    /* margin: 0 30px; */
    max-width: 50%;
    /* border: 1px solid red; */
}

.carousel img {
    width: 75%;
}

.images {
    margin: 40px 0;
    position: relative;
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


</style>