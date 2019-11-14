<template>
  <div class="navbar">
    <h1>ICE_LGS by Denis GUIRAUDET & Matthieu ORRIERE</h1>
    <div class="navbar_action">
      <font-awesome-icon icon="save" />
    </div>
    <div class="navbar_action">
      <font-awesome-icon icon="file-import" />
    </div>
  </div>
</template>

<script>


export default {

};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  flex-direction: row;
  height: 50px;
  h1 {
    flex: 1;
    line-height: 50px;
    margin: 0;
  }
  .navbar_action {
    line-height: 50px;
    width: 50px;
  }
}
</style>
