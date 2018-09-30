<template>
  <div class="notification">
    <h3>{{ item.title }}</h3>
    <p v-if="item.text">{{ item.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    item: Object,
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
