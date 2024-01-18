<template>
  <div class="table-container">
    <div class="table-box">
      <table v-if="filteredTableData.length" :cellpadding="0" :cellspacing="0">
        <thead>
          <tr>
            <th v-for="(header, index) in headers" :key="index">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in filteredTableData" :key="rowIndex">
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              :class="{
                'green-text':
                  cellIndex === 2 && Number(row.carryCapacity) === 200,
              }"
            >
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchData, fetchPlanetById } from "../../api/api";
const headers = ref([]);
const filteredTableData = ref([]);

onMounted(async () => {
  try {
    const result = await fetchData("/miners", {});
    filteredTableData.value = await Promise.all(
      result.map(async (miner) => {
        const planetName = await fetchPlanetById(miner.planet);
        let statusText = "";
        switch (miner.status) {
          case 0:
            statusText = "Idle";
            break;
          case 1:
            statusText = "Traveling";
            break;
          case 2:
            statusText = "Mining";
            break;
          case 3:
            statusText = "Transfering";
            break;
          default:
            statusText = "Unknown";
        }
        return {
          Name: miner.name.replace("Miner", "Mi").replace(/\s/g, ""),
          Planet: planetName.replace("Planet", "Pl").replace(/\s/g, ""),
          carryCapacity: `${miner.carryCapacity}/200`,
          travelSpeed: miner.travelSpeed,
          miningSpeed: miner.miningSpeed,
          Position: `${Math.floor(miner.x)},${Math.floor(miner.y)}`,
          Status: statusText,
        };
      })
    );
    headers.value = Object.keys(filteredTableData.value[0]);
  } catch (error) {
    console.error("Error in getData:", error);
  }
});
</script>
<style scoped lang="scss">
</style>

