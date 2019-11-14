<template>
  <div id="home">
    <TableList/>
  </div>
</template>

<script>
import TableList from '@/components/home/TableList.vue';


export default {
  name: 'home',
  components: {
    TableList,
  },
};
</script>

<style lang="scss">
#home {
  background-image: url('../assets/picture/lapin.jpg');
  background-size: cover;
}
</style>
