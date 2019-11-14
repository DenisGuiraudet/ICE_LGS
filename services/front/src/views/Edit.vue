<template>
  <div id="edit">
    <ExigenceCategory
        :selected-exigence="selectedExigence"
        :exigence-list="exigenceList"
      />
    <RelationExigence
        :selected-exigence="selectedExigence"
        :exigence-list="exigenceList"
      />
  </div>
</template>

<script>
import axios from 'axios';

import ExigenceCategory from '@/components/edit/ExigenceCategory.vue';
import RelationExigence from '@/components/edit/RelationExigence.vue';
import { backUrl } from '@/constants';


export default {
  name: 'edit',
  components: {
    ExigenceCategory,
    RelationExigence,
  },

  data() {
    return {
      selectedExigence: null,
      exigenceList: [],
    };
  },

  mounted() {
    axios
      .get(`${backUrl}/util/editon`)
      .then((response) => {
        this.exigenceList = response.data;
      });
  },

};
</script>

<style lang="scss">
#edit {
  display: flex;
  flex-direction: row;
  .edit_table {
    flex: 1;
    display: flex;
    flex-direction: column;
    .title,
    .line {
      display: flex;
      flex-direction: row;
      .cell {
        flex: 1;
      }
    }
  }
}
</style>
