<template>
  <div class="c-not-found__page">
    <div class="c-not-found__404">404</div>
    <div class="c-not-found">Not Found</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.c-not-found__page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  .c-not-found__404 {
    font-size: 40px;
    color: #0099ff;
    .c-not-found {
      text-transform: uppercase;
    }
  }
}
</style>
