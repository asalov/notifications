<template>
  <div class="badge">
    <div class="total">{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    count: Number,
  },
};
</script>

<style scoped>
.badge {
  border-radius: 50%;
  background: #e54c2c;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.total {
  color: #fff;
  font-size: 10px;
}
</style>
