<template>
  <div id="tabList">
    <Table v-for="elem in listElem" :key='elem.name' :currentElement=elem
      @createNewTable="newTable" :id="elem.idTable"/>
  </div>
</template>

<script>
import axios from 'axios';
import Table from '@/components/home/Table.vue';

export default {

  data() {
    return {
      listElem: [],
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000/util/exigences_with_category')
      .then((response) => { this.listElem.push(response.data); });
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

<style scoped lang="scss">
#tabList {
  display: flex;
  flex-wrap: nowrap;
}
</style>
