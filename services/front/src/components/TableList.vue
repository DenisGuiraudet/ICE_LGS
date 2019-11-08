<template>
  <div class="tabList">
    <Table v-for="elem in listElem" :key='elem.name' :currentElement=elem
      @createNewTable="newTable" :id="elem.idTable"/>
  </div>
</template>

<script>
import Table from '@/components/Table.vue';


export default {

  data() {
    return {
      listElem: [
        {
          name: 'Coucou',
          type: 'Exigence',
          idTable: '0',
        },
      ],
    };
  },
  components: {
    Table,
  },
  methods: {
    newTable(selectedElement, idTable) {
      if (idTable < this.listElem.length) {
        this.listElem.splice(idTable + 1, this.listElem.length);
      }
      const tempSelectedElement = selectedElement;
      tempSelectedElement.idTable = this.listElem.length;
      this.listElem.push(tempSelectedElement);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabList {
  display: flex;
  flex-wrap: nowrap;
}
</style>
