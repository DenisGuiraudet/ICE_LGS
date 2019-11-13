<template>
  <div class="home">
    <NavBar/>
    <TableList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TableList from '@/components/TableList.vue';
import NavBar from '@/components/NavBar.vue';


export default {
  name: 'home',
  components: {
    TableList, NavBar,
  },
};
</script>
