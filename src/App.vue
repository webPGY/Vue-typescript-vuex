<template>
  <div id="app">
    <p>{{isTest}}</p>
    <h1>{{isComputer}}</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "App",
})
export default class App extends Vue {
  isTest: string = "hello typescript!";
  get isComputer() {
    return `This is a computer : ${typeof this.isTest === "string"}`;
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
