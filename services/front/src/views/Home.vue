<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TableList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TableList from '@/components/TableList.vue';

export default {
  name: 'home',
  components: {
    TableList,
  },
};
</script>
