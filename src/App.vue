<template>
  <div id="app">
    <Header id="header"/>
    
    <router-view></router-view>
    
    <Footer id="footer"/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Footer
  }
}

</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
#app {
  font-family: 'Nanum Gothic', sans-serif;
 -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 40px;
  min-width: 1200px;
  width: auto;
  min-height: 100%;

}
#footer {
  position: relative;
  bottom: 0;
  z-index: 10;
}

</style>
