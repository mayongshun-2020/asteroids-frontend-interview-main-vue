<template>
  <div class="box">
    <div
      class="item"
      :class="{ active: currentComponent === 'minersList' }"
      @click="showComponent('minersList')"
    >
      <div class="icon-container">
        <iconMiner />
      </div>
      <p>Miners</p>
    </div>
    <div
      class="item"
      :class="{ active: currentComponent === 'asteroidsList' }"
      @click="showComponent('asteroidsList')"
    >
      <div class="icon-container">
        <iconAsteroids />
      </div>

      <p>Asteroids</p>
    </div>
    <div
      class="item"
      :class="{ active: currentComponent === 'planetsList' }"
      @click="showComponent('planetsList')"
    >
      <div class="icon-container">
        <iconPlanets />
      </div>

      <p>Planets</p>
    </div>
  </div>
  <div class="divider"></div>
  <div class="list">
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import iconMiner from "./icons/iconMiners.vue";
import iconAsteroids from "./icons/iconAsteroids.vue";
import iconPlanets from "./icons/iconPlanets.vue";
import minersList from "./list/minersList.vue";
import asteroidsList from "./list/asteroidsList.vue";
import planetsList from "./list/planetsList.vue";

export default defineComponent({
  components: {
    iconMiner,
    iconAsteroids,
    iconPlanets,
    minersList,
    asteroidsList,
    planetsList,
  },
  setup() {
    const currentComponent = ref("minersList");
    const showComponent = (componentName) => {
      currentComponent.value = componentName;
    };
    return {
      currentComponent,
      showComponent,
    };
  },
});
</script>

<style scoped lang="scss">
.box {
  display: flex;
  margin-left: 32px;
  align-items: center;
  .item {
    width: 70px;
    height: 66px;
    cursor: pointer;
    box-shadow: none;
    margin-right: 20px;
    p {
      color: #9499c3;
      font-family: Lato;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      margin: 0;
      text-align: center;
    }
    
    .icon-container {
      padding: 8px 19px 1px 19px;
    }
    &.active {
      flex-shrink: 0;
      border-radius: 8px;
      background: #191a29;
      box-shadow: 0px 0px 0px 1px #32334a, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      :deep(svg path) {
        fill: #38d9a9;
      }
    }
  }
}

.divider {
  width: 100%;
  height: 0.5px;
  background: #33344b;
  margin-top: 24px;
}
.list {
  margin-left: 32px;
  margin-right: 32px;
}
</style>
