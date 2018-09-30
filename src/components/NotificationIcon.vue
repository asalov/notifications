<template>
  <div
    class="icon-wrapper"
    :class="{ active }"
    @click="$emit('showNotifications')"
  >
    <Badge
      v-show="total"
      :total="total"
    />
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M18 15.984l2.016 2.016v0.984h-16.031v-0.984l2.016-2.016v-4.969c0-3.094
      1.641-5.625 4.5-6.328v-0.703c0-0.844 0.656-1.5 1.5-1.5s1.5 0.656 1.5
      1.5v0.703c2.859 0.703 4.5 3.281 4.5 6.328v4.969zM12 21.984c-1.125
      0-2.016-0.891-2.016-1.969h4.031c0 1.078-0.938 1.969-2.016 1.969z">
      </path>
    </svg>
  </div>
</template>

<script>
import Badge from './Badge';

export default {
  name: 'NotificationIcon',
  components: {
    Badge,
  },
  props: {
    active: Boolean,
    total: Number,
  },
};
</script>

<style scoped>
.icon-wrapper {
  border-radius: 4px;
  border: 1px solid #b8c0c7;
  background: #fefefe;
  width: 35px;
  height: 35px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 18px;
}

.icon-wrapper.active {
  background: #ecedf0;
}

svg {
  fill: #a9b4bc;
}
</style>
