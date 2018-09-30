<template>
  <div id="app">
    <div id="container">
      <NotificationIcon
        @showNotifications="toggleMenu"
        :active="showMenu"
        :total="totalNotifications"
      />
      <transition name="slide-down-fade">
        <NotificationPanel
          v-show="showMenu"
          :data="notifications"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import FetchService from './services/FetchService';
import NotificationIcon from './components/NotificationIcon';
import NotificationPanel from './components/NotificationPanel';

export default {
  name: 'App',
  components: {
    NotificationIcon,
    NotificationPanel,
  },
  data() {
    return {
      showMenu: false,
      notifications: [],
    };
  },
  created() {
    this.getNotifications();

    this.interval = setInterval(this.getNotifications, 5000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
  computed: {
    totalNotifications() {
      return this.notifications.filter(item => item.type !== 'bonus').length;
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    getNotifications() {
      FetchService.get('notifications')
        .then((res) => {
          this.notifications = res;
        });
    },
  },
};
</script>

<style>
body {
  background: #eff3f6;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

#app {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

#container {
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.slide-down-fade-enter-active, .slide-down-fade-leave-active {
  transition: all .3s ease;
}

.slide-down-fade-enter, .slide-down-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
