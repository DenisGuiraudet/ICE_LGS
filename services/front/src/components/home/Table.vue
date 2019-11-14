<template>
  <div class="table-container">
    <p>{{this.currentElement.title}} {{this.currentElement.idTable}}</p>
    <table>
      <tr>
        <th v-for="value in this.currentElement.types" :key="value.id">{{value}}</th>
      </tr>
      <tr v-for="item in this.currentElement.data" :key="item.id">
        <td v-for="value in item" :key="value.id"
        @click="$emit('callAPI', value, currentElement.idTable)">
          {{value.name}}
        </td>
      </tr>
    </table>
  </div>
</template>


<script>

export default {
  data() {
    return {
      typeData: '',
    };
  },
  props: {
    currentElement: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">

.table-container {
  height: calc(100vh - 50px);
  overflow-y: auto;
  min-width: max-content;
  table {
    border-collapse: collapse;
    min-width: 400px;
    max-width: 500px;
    max-height: 500px;
    padding: 50px;
    margin: 50px;
    td, th {
      border: 1px solid #ddd;
      padding: 8px;
      cursor: pointer;
    }
    tr:nth-child(even){background-color: #f2f2f2;}
    tr:hover {background-color: #ddd;}
    td:hover {
      transition-property: background-color, width, height;
      background-color: rgba(76, 175, 80, 0.5);
      transition-duration: 0.5s;
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #4CAF50;
      color: white;
    }
  }
}

</style>
