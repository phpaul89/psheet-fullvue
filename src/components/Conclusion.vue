<template>
  <div id="conclusion">
    <FurtherNotes />
    <NextSteps />
  </div>
</template>

<script>
import FurtherNotes from "./FurtherNotes.vue";
import NextSteps from "./NextSteps.vue";

export default {
  name: "Conclusion",
  components: { FurtherNotes, NextSteps }
};
</script>

<style scoped>
#conclusion {
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>