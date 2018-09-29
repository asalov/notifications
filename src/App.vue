<template>
  <div id="app">
    <Notifications />
  </div>
</template>

<script>
import Notifications from './components/Notifications';

export default {
  name: 'App',
  components: {
    Notifications,
  },
};
</script>

<style>
body {
  background: #eee;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  margin-top: 60px;
}
</style>
