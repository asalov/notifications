<template>
  <div class="notification">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    text: String,
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
</style>
