<template>
  <div class="table-container">
    <div class="table-container-content">
      <div class="header">{{this.currentElement.title}}</div>
      <div class="searchbar">
        <input
              type="text"
              v-model="this.textSearch"
              placeholder="Search"
            />
      </div>
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
      textSearch: '',
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
      this.selectedItemId = item[0]._id;
      this.$emit('callAPI', value, idTable);
    },
  },
  computed: {
    filteredCurrentElement() {
      return this.currentElement.data.filter((text) => {
        const itemsFiltered = [];
        for (items in this.currentElement.data) {
          if (items.name.includes(text)) {
            itemsFiltered.push(items);
          }
        }
        return itemsFiltered;
      });
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
    position: relative;
    margin: 25px;
    .header {
      position: sticky;
      top: 0;
      left: 0;
      background-color: $text-dark;
      color: $text-light;
      border: 1px white solid;
      margin-bottom: 10px;
      padding: 5px;
    }
    .searchbar{
      margin-bottom: 10px;
      input {
        width: calc(100% -  10px);
      }
    }
    table {
      border-collapse: collapse;
      background-color: white;
      width: 100%;
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
          color: white;
          background-color: #4CAF50;
          text-align: center;
        }
        td {
          cursor: pointer;
          &:hover {
            background-color: darken(lightgoldenrodyellow, 10%);
            transition: background-color 0.3s;
          }
        }
      }
    }
  }
}

</style>
