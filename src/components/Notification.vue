<template>
  <div class="notification">
    <div class="notification-data">
      <div
        v-if="notificationType"
        class="notification-type"
        :class="notificationType"
      >{{ notificationType }}</div>
      <h3>{{ item.title }}</h3>
      <p>
        <a
          v-if="item.link"
          :href="itemContent"
          target="_blank"
        >{{ itemContent }}</a>
        <span v-else>{{ itemContent }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    item: Object,
  },
  computed: {
    itemContent() {
      const { item } = this;
      const contentTypes = {
        text: 'text',
        bonus: 'requirement',
        promotion: 'link',
      };

      return item[contentTypes[item.type]];
    },
    notificationType() {
      const { type } = this.item;

      return type !== 'text' ? type : null;
    },
  },
};
</script>

<style scoped>
.notification {
  padding: 20px;
  font-size: 14px;
}

.notification:not(:last-child) {
  border-bottom: 1px solid #b8c0c7;
}

.notification-type {
  display: inline-block;
  color: #fff;
  border-radius: 4px;
  padding: 3px 5px;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
}

.bonus {
  background: #65b979;
}

.promotion {
  background: #d83c4a;
}

h3 {
  margin: 0;
}

p {
  margin: 5px 0 0;
}
</style>
