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
                <img alt="person on laptop" id="four" src="../assets/4.png">
                <img alt="person on desktop" id="five" src="../assets/5.png">
                <img alt="hands making clay pottery" id="six" src="../assets/6.png">
            </div>
        </div>

        <div class="products">
            <div class="products-title">   
                <div>
                    Sản phẩm
                </div>
                <div>
                    <router-link to="/product">Xem thêm</router-link>
                    <router-link to="/stockists">Tìm đại lý</router-link>
                </div>
            </div>

            <div class="product">
                <img alt="vinegar2" src="../assets/2.jpeg">

                <div class="product-desc">
                    <div>
                    Dấm gạo lứt
                    </div>
                    <div>
                        <button>Chọn mua</button>
                    </div>
                </div>
            </div>

            <div class="product">
                <img alt="vinegar3" src="../assets/10.jpeg">

                <div class="product-desc">
                    <div>
                    Dấm gạo lứt
                    </div>
                    <div>
                        <button>Chọn mua</button>
                    </div>
                </div>
            </div>

            <div class="product">
                <img alt="vinegar4" src="../assets/11.jpeg">

                <div class="product-desc">
                    <div>
                    Dấm gạo lứt
                    </div>
                    <div>
                        <button>Chọn mua</button>
                    </div>
                </div>
            </div>
      
            
        </div>

        <div>
            <div class="health-title">
                Dấm và sức khoẻ
            </div>

            <div class="health-benefits">
                <div class="health">
                    <div class="ingredients">
                        <img src="../assets/honey.png" alt="honey">
                        <div>Mật ong</div>
                    </div>
                    <div class="ingredients">
                        <img src="../assets/ginger.png" alt="ginger">
                        <div>Gừng</div>
                    </div>
                    <div class="ingredients">
                        <img src="../assets/apple-vinegar.png" alt="apple vinegar">
                        <div>Dấm táo</div>
                    </div>
                    <div class="benefits">
                        <div>Tăng sức đề kháng </div>
                        <div>Làm ấm cơ thể</div>
                        <div>Chữa đau họng</div>
                    </div>
                </div>

                <div class="health">
                    <div class="ingredients">
                        <img src="../assets/honey.png" alt="honey">
                        <div>Mật ong</div>
                    </div>
                    <div class="ingredients">
                        <img src="../assets/ginger.png" alt="ginger">
                        <div>Gừng</div>
                    </div>
                    <div class="ingredients">
                        <img src="../assets/apple-vinegar.png" alt="apple vinegar">
                        <div>Dấm táo</div>
                    </div>
                    <div class="benefits">
                        <div>Tăng sức đề kháng </div>
                        <div>Làm ấm cơ thể</div>
                        <div>Chữa đau họng</div>
                    </div>
                </div>

                <div class="health">
                    <div class="ingredients">
                        <img src="../assets/honey.png" alt="honey">
                        <div>Mật ong</div>
                    </div>
                    <div class="ingredients">
                        <img src="../assets/ginger.png" alt="ginger">
                        <div>Gừng</div>
                    </div>
                    <div class="ingredients">
                        <img src="../assets/apple-vinegar.png" alt="apple vinegar">
                        <div>Dấm táo</div>
                    </div>
                    <div class="benefits">
                        <div>Tăng sức đề kháng </div>
                        <div>Làm ấm cơ thể</div>
                        <div>Chữa đau họng</div>
                    </div>
                </div>

                <div class="health">
                    <div class="ingredients">
                        <img src="../assets/honey.png" alt="honey">
                        <div>Mật ong</div>
                    </div>
                    <div class="ingredients">
                        <img src="../assets/ginger.png" alt="ginger">
                        <div>Gừng</div>
                    </div>
                    <div class="ingredients">
                        <img src="../assets/apple-vinegar.png" alt="apple vinegar">
                        <div>Dấm táo</div>
                    </div>
                    <div class="benefits">
                        <div>Tăng sức đề kháng </div>
                        <div>Làm ấm cơ thể</div>
                        <div>Chữa đau họng</div>
                    </div>
                </div>
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
    /* border: 1px solid red; */
}

.flex {
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
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
    max-width: 50%;
    min-width: 500px;
    /* border: 1px solid red; */
}

.carousel img {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.img-contain {
    box-sizing: border-box;
    width: 80%;
    height: 65vh;
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

#four {
    width: 35%;
}

#five {
    width: 21.75%;
}

#six {
    width: 30%;
}

.text {
    position: absolute;
    font-size: 148%;
    text-align: right;
    /* border: 1px solid red; */
    width: 50%;
    right: 3%;
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

.products img {
    height: 30vh;
    min-height: 300px;
    margin-bottom: 40px;
}

button {
    background-color: #64906C;
    padding: 5px;
    border-radius: 10px;
    border: none;
    color: white;
}

.product {
    width: 25%;
    display: inline-block;
    margin: 40px;
}

.product-desc {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
}

.products-title, .health-title {
    display: flex;
    justify-content: space-between;
    /* border: 2px solid red; */
    font-size: 1.5em;
    padding: 0 20px;
}

.products-title a {
    text-decoration: none;
    color: black;
    margin: 0 20px;
}

.products-title a:hover {
    color: #F0BB4A;
}

.health img {
    height: 10vh;
    min-height: 100px;
    margin-bottom: 10px;
}

.health {
    display: block;
    margin: 20px 0;
}

.ingredients {
    display: inline-block;
    margin: 10px 0;
}


.benefits {
    display: inline-block;
    height: 100%;
    text-align: left;
    position: relative;
    bottom: 45px;
    padding: 10px;
}

.benefits p {
    margin: 5px 0;
}


.health-benefits {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px 0;
}
</style>