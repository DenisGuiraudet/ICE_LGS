<template>
  <div id="relationExigence" class="edit_container">
    <div class="edit_table">
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
                />
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
            <select v-model="relation.exigence_2_id">
              <option
                  disabled
                  :value="null"
                />
              <option
                  v-for="exigenceItem in exigenceList"
                  :key="exigenceItem._id"
                  :value="exigenceItem._id"
                  :disabled="exigenceItem._id === selectedExigence._id"
                >
                {{ exigenceItem.url }} - {{ exigenceItem.name }}
              </option>
            </select>
          </div>
        </div>
      </template>
    </div>
    <div v-if="selectedExigence">
      <div class="line_action"></div>
      <div
          class="line_action"
          v-for="(relation, relationKey) in selectedExigence.relations"
          :key="relation._id"
        >
        <div
            class="cell_action action_erase"
            @click="eraseRelation(relationKey)"
          >
          <font-awesome-icon icon="toilet" />
        </div>
      </div>
      <div class="line_action">
        <div
            class="cell_action action_add"
            @click="addRelation()"
          >
          <font-awesome-icon icon="plus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { newRelation } from '@/helper/util';
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
    eraseRelation(relationKey) {
      this.selectedExigence.relations.splice(relationKey, 1);
    },
    addRelation() {
      this.selectedExigence.relations.push(newRelation(this.selectedExigence._id));
    },
  },

};
</script>

<style scoped lang="scss">
@import '@/style/constants';

#relationExigence {
  flex: 1;
  border-left: solid 3px $text-dark;
}
</style>
