<template>
  <div id="edit">
    <ExigenceCategory/>
    <RelationExigence/>
  </div>
</template>

<script>
import ExigenceCategory from '@/components/edit/ExigenceCategory.vue';
import RelationExigence from '@/components/edit/RelationExigence.vue';


export default {
  name: 'edit',
  components: {
    ExigenceCategory,
    RelationExigence,
  },
};
</script>
