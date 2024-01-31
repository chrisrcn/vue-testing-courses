<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld greeting="Hello World" msg="Welcome to Your Vue.js App" />
  <h3>Hello {{ fullName }}</h3>
  <button @click="increment">Clicks: {{ count }}</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      count: 0,
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
  methods: {
    increment() {
      this.count++;
      this.$emit("count", this.count, "Hello");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
