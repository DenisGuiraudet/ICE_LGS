<template>
  <div id="exigenceCategory" class="edit_container">
    <div class="edit_table">
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
          :class="{ 'active': selectedExigence && selectedExigence._id === exigence._id }"
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
              />
            <option
                v-for="categoryType in $options.CATEGORY_TYPES"
                :key="categoryType"
                :value="categoryType"
              >
              {{ categoryType }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div>
      <div class="line_action"></div>
      <div
          class="line_action"
          v-for="(exigence, exigenceKey) in exigenceList"
          :key="exigence._id"
        >
        <div
            class="cell_action action_erase"
            @click="eraseExigence(exigenceKey)"
          >
          <font-awesome-icon icon="toilet" />
        </div>
        <div
            class="cell_action action_select"
            @click="selectExigence(exigence)"
          >
          <font-awesome-icon icon="hand-point-right" />
        </div>
      </div>
      <div class="line_action">
        <div
            class="cell_action action_add"
            @click="addExigence()"
          >
          <font-awesome-icon icon="plus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { newExigence } from '@/helper/util';
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
    eraseExigence(exigenceKey) {
      const exigenceId = this.exigenceList[exigenceKey]._id;

      this.exigenceList.splice(exigenceKey, 1);
      for (const key in this.exigenceList) {
        const exigence = this.exigenceList[key];

        for (const relationKey in exigence.relations) {
          const relation = exigence.relations[relationKey];

          if (relation.exigence_2_id === exigenceId) {
            this.exigenceList[key].relations.splice(relationKey, 1);
          }
        }
      }
    },
    selectExigence(exigence) {
      this.$emit('selectExigence', exigence);
    },
    addExigence() {
      this.exigenceList.push(newExigence());
    },
  },

};
</script>

<style scoped lang="scss">
</style>
