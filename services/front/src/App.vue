<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';


export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import '@/style/constants';

body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-dark;
  & > *:not(.navbar) {
    flex: 1;
    max-height: calc(100vh - 50px);
  }
}
</style>
