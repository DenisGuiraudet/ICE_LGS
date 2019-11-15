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
@import '@/style/constants';

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
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      .title,
      .line {
        display: flex;
        flex-direction: row;
        margin-bottom: 3px;
        &.active {
          input,
          select {
            background-color: lightgoldenrodyellow;
          }
        }
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
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            margin: 1px;
            border: solid 1px $text-dark;
            border-radius:4px;
          }
        }
      }
      .title {
        position: sticky;
        padding-top: 3px;
        top: 0;
        left: 0;
        background-color: white;
      }
    }
  }
  .line_action {
    display: flex;
    flex-direction: row;
    height: 35px;
    margin-bottom: 3px;
    &:first-child {
      position: sticky;
      padding-top: 3px;
      top: 0;
      left: 0;
      background-color: white;
    }
    &.active {
      background-color: lightgoldenrodyellow;
    }
    .cell_action {
      line-height: 35px;
      width: 35px;
      border-radius: 30%;
      background-color: transparent;
      cursor: pointer;
      transition: background-color 0.2s;
      &.action_erase {
        background-color: rgba(red, 0.15);
        &:hover {
          background-color: rgba(red, 0.7);
        }
      }
      &.action_select {
        background-color: rgba(blueviolet, 0.15);
        &:hover {
          background-color: rgba(blueviolet, 0.7);
        }
      }
      &.action_add {
        background-color: rgba(green, 0.15);
        &:hover {
          background-color: rgba(green, 0.7);
        }
      }
    }
  }
}
</style>
