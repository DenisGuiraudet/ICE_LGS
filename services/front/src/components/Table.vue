<template>
  <div class="table">
    <p>{{this.currentElement.type}} {{this.currentElement.idTable}}</p>
    <table>
      <tr>
        <th v-for="value in this.fakeData[0]" :key="value.id">{{value.type}}</th>
      </tr>
      <tr v-for="data in this.fakeData" :key="data[1].id">
        <td v-for="value in data" :key="value.id"
        @click="$emit('createNewTable', value, currentElement.idTable)">
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
      fakeData: [
        [
          {
            name: 'TEST',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ], [
          {
            name: 'Interface Utilisateur',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '1',
          },
          {
            name: 'UI',
            type: 'Component',
          },
        ], [
          {
            name: 'LED Rouge',
            type: 'Component',
          },
          {
            name: 'Beyond',
            type: 'Relation',
            id: '2',
          },
          {
            name: 'LED Jaune',
            type: 'Component',
          },
        ],
      ],
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
</style>
