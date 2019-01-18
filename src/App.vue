<template>
  <div id="app">
    <router-view />
    <footer-view v-show="$route.meta.navShow"></footer-view>
    <foot-view v-show="$route.meta.navShows"></foot-view>
    <foot-views v-show="$route.meta.batShow"></foot-views>
  </div>
</template>

<script> 
import FooterView from './views/footer'
import FootView from './views/footer/footer'
import FootViews from './views/footer/personal'


export default {
  name: 'app',
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  components: {
    FooterView,
    FootView,
    FootViews
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4d4d4d;
}
</style>