<template>
  <div class="navbar">
    <h1>ICE_LGS by Denis GUIRAUDET & Matthieu ORRIERE</h1>
    <router-link
        v-if="$route.path === '/edit'"
        class="navbar_action"
        to="/"
      >
      <font-awesome-icon icon="igloo" />
    </router-link>
    <router-link
        v-else
        class="navbar_action"
        to="edit"
      >
      <font-awesome-icon icon="pen" />
    </router-link>
  </div>
</template>

<script>


export default {

};
</script>

<style scoped lang="scss">
@import '@/style/constants';

.navbar {
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: $text-dark;
  color: $text-light;
  h1 {
    flex: 1;
    line-height: 50px;
    margin: 0;
    overflow: hidden;
  }
  .navbar_action {
    line-height: 50px;
    width: 50px;
    color: $text-light;
    &:hover {
      background-color: lighten($text-dark, 10%);
    }
  }
}
</style>
