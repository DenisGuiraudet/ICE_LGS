<template>
  <div id="tabList">
    <Table v-for="elem in listElem" :key='elem.name' :currentElement=elem
      @callAPI="callAPI" :id="elem.idTable"/>
  </div>
</template>

<script>
import axios from 'axios';

import Table from '@/components/home/Table.vue';
import { backUrl, TYPES } from '@/constants';

export default {
  components: {
    Table,
  },

  data() {
    return {
      listElem: [],
    };
  },

  mounted() {
    axios
      .get(`${backUrl}/util/exigences_with_category`)
      .then((response) => {
        this.newTable(response.data, 0);
      });
  },

  methods: {
    callAPI(value, idTable) {
      switch (value.type) {
        case TYPES.CATEGORY:
          axios
            .get(`${backUrl}/util/exigences_from_category_name/${value.name}`)
            .then((response) => {
              this.newTable(response.data, idTable);
            });
          break;
        case TYPES.EXIGENCE:
          axios
            .get(`${backUrl}/util/relations_from_exigence/${value._id}`)
            .then((response) => {
              this.newTable(response.data, idTable);
            });
          break;
        case TYPES.RELATION:
          axios
            .get(`${backUrl}/util/relations_exigences_from_relation_name/${value.name}`)
            .then((response) => {
              this.newTable(response.data, idTable);
            });
          break;
        default:
          break;
      }
    },
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
  height: 100%;
  overflow-x: auto;
}
</style>
