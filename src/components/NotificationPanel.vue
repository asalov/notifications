<template>
  <div class="panel">
    <div class="header">
      Notifications
    </div>
    <transition-group
      name="notification"
      tag="div"
      class="notification-list"
    >
      <Notification
        v-for="item in notifications"
        :key="item.id"
        :item="item"
      />
    </transition-group>
  </div>
</template>

<script>
import Notification from './Notification';

export default {
  name: 'NotificationPanel',
  components: {
    Notification,
  },
  props: {
    data: Array,
    isShown: Boolean,
  },
  data() {
    return {
      notifications: [],
      timeouts: [],
    };
  },
  methods: {
    showNotifications() {
      if (this.isShown) {
        this.notifications = this.data.map((item) => {
          if (!this.itemExists(item.id) && item.expires) {
            const expiryTimeout = setTimeout(
              () => this.$emit('notificationExpired', item.id),
              (item.expires) * 1000,
            );
            this.timeouts = [...this.timeouts, expiryTimeout];
          }

          return item;
        });
      }
    },
    itemExists(id) {
      return this.notifications.find(item => item.id === id);
    },
  },
  watch: {
    isShown() {
      this.showNotifications();
    },
    data() {
      this.showNotifications();
    },
  },
  destroyed() {
    this.timeouts.forEach(timeout => clearTimeout(timeout));
  },
};
</script>

<style scoped>
.panel {
  width: 100%;
  margin-top: 25px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  position: relative;
}

.panel::before {
  content: "";
  position: absolute;
  top: -11px;
  right: 25px;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #6a98ee;
}

.header {
  text-transform: uppercase;
  background: #6a98ee;
  color: #fff;
  padding: 10px 10px 10px 20px;
  border-radius: 4px 4px 0 0;
  font-size: 14px;
}

.notification-list {
  background: #fff;
  border-radius: 0 0 4px 4px;
}

.notification-enter-active, .notification-leave-active {
  transition: all 0.5s;
}

.notification-enter, .notification-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.notification-move {
  transition: transform 0.5s;
}
</style>
