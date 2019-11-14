<template>
  <div id="edit">
    <ExigenceCategory/>
    <RelationExigence/>
  </div>
</template>

<script>
import ExigenceCategory from '@/components/edit/ExigenceCategory.vue';
import RelationExigence from '@/components/edit/RelationExigence.vue';
import { backUrl } from '@/constants';


export default {
  name: 'edit',
  components: {
    ExigenceCategory,
    RelationExigence,
  },

  mounted() {
    axios
      .get(`${backUrl}/util/exigences_with_category`)
      .then((response) => {
        this.newTable(response.data, 0);
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
