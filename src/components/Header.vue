<template>
  <div class="title">
    <img
      alt="Vue logo"
      class="logo"
      src="../assets/logo.svg"
      width="125"
      height="125"
    />
    <span>BACKEND MINER</span>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.title {
  width: 100%;
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: 2.8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    padding: 24px 8px 24px 24px;
    margin-right: 8px;
  }
}
</style>
