<template>
  <!-- Scans -->
  <div id="scans">
    <Scan scanText="First Scan" scanId="SCA" />
    <Scan scanText="Second Scan" scanId="SCB" />
  </div>
</template>

<script>
import Scan from "./Scan.vue";

export default {
  name: "Scans",
  components: { Scan }
};
</script>

<style scoped>
#scans {
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>