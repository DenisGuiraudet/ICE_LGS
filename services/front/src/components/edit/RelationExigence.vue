<template>
  <div id="relationExigence" class="edit_table">
      <div class="title">
        <div class="cell">
          {{ $options.TYPES.RELATION }}
        </div>
        <div class="cell">
          {{ $options.TYPES.EXIGENCE }}
        </div>
      </div>
      <div class="line">
        <div class="cell">
        </div>
        <div class="cell">
        </div>
      </div>
  </div>
</template>

<script>
import { TYPES } from '@/constants';


export default {
  components: {
  },

  data() {
    return {
    };
  },

  TYPES,

  methods: {
  },
};
</script>

<style scoped lang="scss">
</style>
