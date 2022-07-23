<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <nav>
            <div class="left">
                <router-link to="/"> <div id="homelink"> <img alt="Vietferm Logo" id="logo" src="./assets/logo.png"> Vietferm </div></router-link> 
                <router-link to="/product">Sản phẩm</router-link>  
                <router-link to="/stockists">Đại lý</router-link> 
                <router-link to="/about">Về chúng tôi</router-link>
            </div>
            <button id="account"><router-link to="#">Tài khoản</router-link></button>
        </nav>
        <router-view />
    
  </div>
</template>

<script>

</script>

<style>
    
    
:root {
    background-color: #F5F5F5;
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
    padding: 30px;
    border: 3px solid red;
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
  color: #42b983;
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

#account {
    background-color: #64906C;
    padding: 3px;
    border-radius: 10px;
    border: none;
}

#account a {
    color: #FFF7EF;
}

</style>
