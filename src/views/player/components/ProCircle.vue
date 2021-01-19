<template>
  <van-circle
    v-model:current-rate="state.currentRate"
    :rate="rate"
    :speed="100"
    layer-color="#ebedf0"
    :size="32"
    color="#d44439"
    :stroke-width="60"
  >
    <slot name="default">
      <van-icon
        v-if="isPlay"
        @click="handlePlayClick"
        color="#d44439"
        name="pause"
        size="22"
      />
      <van-icon
        v-else
        @click="handlePlayClick"
        color="#d44439"
        name="play"
        size="22"
      />
    </slot>
  </van-circle>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  props: {
    isPlay: Boolean,
    handlePlayClick: Function,
    rate: Number,
  },
  setup(props) {
    const state = reactive({
      currentRate: 50,
    });
    return {
      state,
    };
  },
};
</script>
<style lang="scss">
</style>