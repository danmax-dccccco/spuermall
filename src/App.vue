<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>

    <main-tab-bar v-show="$route.path !=='/detail/' + $route.params.iid" />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },

};
</script>

<style>
@import "assets/css/base.css";
</style>
