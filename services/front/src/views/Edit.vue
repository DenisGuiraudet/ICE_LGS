<template>
  <div id="edit">
    <ExigenceCategory
        :selected-exigence="selectedExigence"
        :exigence-list="exigenceList"
        @selectExigence="selectExigence"
      />
    <RelationExigence
        :selected-exigence="selectedExigence"
        :exigence-list="exigenceList"
      />
    <SaveDropdown
        :exigence-list="exigenceList"
        @exigenceListChanged="exigenceListChanged"
      />
  </div>
</template>

<script>
import axios from 'axios';

import ExigenceCategory from '@/components/edit/ExigenceCategory.vue';
import RelationExigence from '@/components/edit/RelationExigence.vue';
import SaveDropdown from '@/components/edit/SaveDropdown.vue';
import { backUrl } from '@/constants';


export default {
  name: 'edit',
  components: {
    ExigenceCategory,
    RelationExigence,
    SaveDropdown,
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

  methods: {
    selectExigence(exigence) {
      this.selectedExigence = exigence;
    },
    exigenceListChanged(exigenceList) {
      this.exigenceList = exigenceList;
    },
  },

};
</script>

<style lang="scss">
#edit {
  position: relative;
  display: flex;
  flex-direction: row;
  .edit_container {
    flex: 1;
    display: flex;
    flex-direction: row;
    max-width: 50%;
    overflow-x: scroll;
    .edit_table {
      flex: 1;
      display: flex;
      flex-direction: column;
      .title,
      .line {
        display: flex;
        flex-direction: row;
        .cell {
          line-height: 35px;
          flex: 1;
          input,
          select {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          input {
            border: 0;
          }
        }
      }
    }
  }
  .line_action {
    display: flex;
    flex-direction: row;
    height: 35px;
    .cell_action {
      line-height: 35px;
      width: 35px;
      &.action_erase,
      &.action_select {
        border: solid 1px darkgray;
      }
      &.action_erase {
        background: red;
      }
      &.action_select {
        background: blueviolet;
      }
    }
  }
}
</style>
