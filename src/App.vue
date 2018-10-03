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
          :isShown="showMenu"
          @notificationExpired="updateNotificationList"
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
      requestInterval: null,
      notifications: [],
    };
  },
  created() {
    this.getNotifications();

    this.requestInterval = setInterval(this.getNotifications, 5000);
  },
  destroyed() {
    clearInterval(this.requestInterval);
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
    updateNotificationList(itemId) {
      /*
        In a real scenario, you would probably not have to do this,
        as the backend will be automatically updated when a notification expires
      */
      FetchService.remove(`notifications/${itemId}`)
        .then(() => {
          this.notifications = this.notifications.filter(item => item.id !== itemId);
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
