<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <nav>
            <router-link to="/">Vietferm</router-link> | 
            <router-link to="/product">Sản phẩm</router-link> | 
            <router-link to="/stockists">Đại lý</router-link> |
            <router-link to="/about">Về chúng tôi</router-link>
        </nav>
        <router-view />
    
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #F5F5F5;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
