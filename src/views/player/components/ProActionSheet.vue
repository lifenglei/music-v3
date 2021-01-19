<template>
  <van-action-sheet
    v-model:show="actionsSheetShow"
    :actions="actions"
    cancel-text="取消"
    close-on-click-action
    @cancel="onCancel"
    :close-on-click-overlay="false"
    safe-area-inset-bottom
    round
  />
</template>
<script>
import { ref, reactive, computed } from "vue";
export default {
  props: {
    actionsSheetShow: Boolean,
    sheetClose: Function,
  },
  setup(props) {
    const actions = [
      { name: "选项一" },
      { name: "选项二" },
      { name: "选项三" },
    ];
    const onCancel = () => {
      props.sheetClose();
    };
    return {
      actions,
      onCancel,
    };
  },
};
</script>
