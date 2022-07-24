<template>
  <div id="app">
        <nav>
            <div class="nav-container">
                <div class="left">
                    <router-link to="/"> <div id="homelink"> <img alt="Vietferm Logo" id="logo" src="./assets/logo.png"> Vietferm </div></router-link> 
                    <router-link to="/product">Sản phẩm</router-link>  
                    <router-link to="/stockists">Đại lý</router-link> 
                    <router-link to="/about">Về chúng tôi</router-link>
                </div>
                <div class="right">
                    <button id="account"><router-link to="#">Tài khoản</router-link></button>
                </div>
            </div>
        </nav>
        <router-view />
    

        <footer>
            <div class="footer-top">
                <div class="footer-links">
                    <div class="link-block">
                        <strong>Vietferm</strong>
                        <div class="links">
                            <router-link to="#">Chuyện lên men</router-link>
                            <router-link to="#">Sức khoẻ</router-link>
                        </div>
                    </div>

                    <div class="link-block">
                        <strong>Sản phẩm</strong>
                        <div class="links">
                            <router-link to="#">Dấm gạo</router-link>
                            <router-link to="#">Dấm rượu vang</router-link>
                            <router-link to="#">Đồ muối chua</router-link>
                            <router-link to="#">Trà kombucha</router-link>
                        </div>
                    </div>

                    <div class="link-block">
                        <strong>Đại lý</strong>
                        <div class="links">
                            <router-link to="#">Quận Ba Đình</router-link>
                            <router-link to="#">Quận Hoàn Kiếm</router-link>
                            <router-link to="#">Quận Đống Đa</router-link>
                            <router-link to="#">Quận Hoàng Mai</router-link>
                        </div>
                    </div>
                    
                </div>

                <div class="footer-logo">
                    <img alt="Vietferm Logo" id="logoFooter" src="./assets/logo.png"> 
                    <div>Vietferm</div>
                </div>
            </div>

            <div class="footer-bottom">
                <div>
                    <div class="socials">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="15px"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="15px"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>

                        </div>

                        <div>
                            Hotline
                        </div>
                    </div>

                    <div class="block">
                        Bản quyền thuộc về hang-le
                    </div>
                    

                </div>

                <div>
                    Lörem ipsum gyder kroligen sedan linjär tv rutavdrag rebuktigt. Renanas vons. 
                </div>
            </div>

        </footer>
  </div>
</template>

<script>

</script>

<style>
    
    
:root {
    background-color: #FFF7EF;
}

body {
    margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
    border-bottom: 3px solid #f7f0ea;

}

.nav-container {
    padding: 30px;
    /* border: 3px solid red; */
    width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 30px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #F0BB4A;
}

#homelink {
    display: inline-block;
}

#logo {
    height: 50px;
    display: block;
    margin: 0 auto;
}

.left {
    display: inline-block;
}

.right {
    position: relative;
    width: 130px;
    /* border: 3px solid blue; */
}

#account {
    background-color: #64906C;
    padding: 3px;
    border-radius: 10px;
    border: none;
    position: absolute;
    bottom: 0;
    right: 0;

}

#account a {
    color: #FFF7EF;
}


.footer-top {
    display: flex;
    justify-content: space-around;
    padding: 50px;
    background-color: #F4F0EA;
}

.footer-bottom {
    display: flex;
    justify-content: space-around;
    padding: 50px 50px 150px 50px;
    font-size: 80%;
    text-align: left;
}

#logoFooter {
    height: 70px;
}

.footer-logo {
    color: #F0BB4A;
}

.footer-links {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
}

.links {
    margin-top: 20px;
}

.links a {
    text-decoration: none;
    color: black;
    display: block;
    font-size: 80%;
    margin: 5px 0;
}

.links a:hover {
    color: #F0BB4A;
}

.instagram {
    height: 10px;
}

.socials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px 0;
}

.socials svg {
    margin: 0 2px;
}

.socials div {
    margin-left: 20px;
    display: inline-block;
}

.block {
    margin-left: 20px;
}

</style>
