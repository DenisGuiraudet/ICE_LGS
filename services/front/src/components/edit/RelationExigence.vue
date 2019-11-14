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
      <template v-if="selectedExigence">
        <div
            class="line"
            v-for="relation in selectedExigence.relations"
            :key="relation._id"
          >
          <div class="cell">
            <select v-model="relation.name">
              <option
                  disabled
                  :value="null"
                >
                !!!
              </option>
              <option
                  v-for="relationType in $options.RELATION_TYPES"
                  :key="relationType"
                  :value="relationType"
                >
                {{ relationType }}
              </option>
            </select>
          </div>
          <div class="cell">
            <input
                type="text"
                v-model="relation.exigence_2_id"
                list="exigences"
              >
            <datalist id="exigences">
              <option
                  v-for="exigeneItem in exigenceList"
                  :key="exigeneItem._id"
                  :value="exigeneItem._id"
                >
                {{ exigeneItem.name }}
              </option>
            </datalist>
          </div>
        </div>
      </template>
  </div>
</template>

<script>
import { TYPES, RELATION_TYPES } from '@/constants';


export default {
  components: {
  },

  TYPES,
  RELATION_TYPES,

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
