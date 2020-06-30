<template>
  <!-- Scans -->
  <div id="scans">
    <Scan
      scanText="First Scan"
      scanId="firstScan"
      :chakraFields="this.$store.getters.patientSheetData($sheetIndex)"
    />
    <Scan
      scanText="Second Scan"
      scanId="secondScan"
      :chakraFields="this.$store.getters.patientSheetData($sheetIndex)"
    />
  </div>
</template>

<script>
import Scan from "./Scan.vue";

export default {
  name: "Scans",
  inject: ["$sheetIndex"],
  components: { Scan },
  created: function() {
    console.log(
      "sheetIndex: ",
      this.$sheetIndex,
      this.$store.getters.patientSheetData(this.$sheetIndex)
    );
  },
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
