<template>
  <div id="exigenceCategory" class="edit_table">
      <div class="title">
        <div class="cell">
          {{ $options.TYPES.EXIGENCE }}
        </div>
        <div class="cell">
          {{ $options.TYPES.CATEGORY }}
        </div>
      </div>
      <div
          class="line"
          v-for="exigence in exigenceList"
          :key="exigence._id"
        >
        <div class="cell">
          <input
              type="text"
              v-model="exigence.name"
              placeholder="name"
            />
        </div>
        <div class="cell">
          <select v-model="exigence.category">
            <option
                disabled
                :value="null"
              >
              !!!
            </option>
            <option
                v-for="categoryType in $options.CATEGORY_TYPES"
                :key="categoryType"
                :value="categoryType"
              >
              {{ categoryType }}
            </option>
          </select>
        </div>
        <div class="cell-action">

        </div>
      </div>
  </div>
</template>

<script>
import { TYPES, CATEGORY_TYPES } from '@/constants';


export default {
  components: {
  },

  TYPES,
  CATEGORY_TYPES,

  props: {
    selectedExigence: {
      type: Object,
      default: null,
    },
    exigenceList: {
      type: Array,
      default: () => [],
    },
  },

  methods: {

  },

};
</script>

<style scoped lang="scss">
</style>
