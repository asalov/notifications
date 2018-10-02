<template>
  <div class="notification">
    <div class="notification-data">
      <h3>{{ item.title }}</h3>
      <p>
        <a
          v-if="hasLink"
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
    hasLink() {
      return this.item.link;
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

h3 {
  margin: 0;
}

p {
  margin: 5px 0 0;
}
</style>
