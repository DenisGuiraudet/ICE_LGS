<template>
  <div class="table-container">
    <div class="table-container-content">
      <div class="header">{{this.currentElement.title}}</div>
      <table>
        <tr>
          <th v-for="(type, typeKey) in this.currentElement.types" :key="typeKey">{{type}}</th>
        </tr>
        <tr
            v-for="item in this.currentElement.data"
            :key="item[0]._id"
            :class="{ 'active': selectedItemId === item[0]._id }"
          >
          <td
              v-for="value in item"
              :key="value._id"
              @click="selectValue(value, item, currentElement.idTable)"
            >
            {{value.name}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      typeData: '',
      selectedItemId: null,
    };
  },
  props: {
    currentElement: {
      type: Object,
    },
  },

  methods: {
    selectValue(value, item, idTable) {
      console.log(item);
      this.selectedItemId = item[0]._id;
      this.$emit('callAPI', value, idTable);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/style/constants';

.table-container {
  height: calc(100vh - 50px);
  overflow-y: auto;
  min-width: max-content;
  .table-container-content {
    margin: 25px;
    table {
      border-collapse: collapse;
      background-color: white;
      width: 100%;
      max-height: 500px;
      tr {
        &:nth-child(even) {
          background-color: #f2f2f2;
        }
        &:hover {
          background-color: lightgoldenrodyellow;
        }
        &.active {
          background-color: lightgoldenrodyellow;
        }
        td, th {
          border: 1px solid #ddd;
          padding: 8px;
        }
        th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #4CAF50;
          color: white;
        }
        td:hover {
          background-color: darken(lightgoldenrodyellow, 10%);
          transition: background-color 0.3s;
          cursor: pointer;
        }
      }
    }
    .header {
        background-color: $text-dark;
        color: $text-light;
        border: 1px white solid;
        margin-bottom: 10px;
        padding: 5px;
    }
  }
}

</style>
