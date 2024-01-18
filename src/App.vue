<script setup>
import Header from "./components/Header.vue";
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";
</script>

<template>
  <Header />
  <div class="content">
    <left></left>
    <right></right>
  </div>
</template>
<style scoped lang="scss">
.content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
