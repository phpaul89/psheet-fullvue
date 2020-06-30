<template>
  <div id="next-steps">
    <div class="section-header-text">{{ headerText }}</div>
    <textarea
      id="next-textarea"
      @input="changed"
      :value="this.$store.getters.patientSheetData($sheetIndex).nextSteps"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "NextSteps",
  inject: ["$sheetIndex"],
  data() {
    return {
      headerText: "Next Steps",
    };
  },
  methods: {
    changed: function(event) {
      const propertyObject = {
        id: "nextSteps",
        value: event.target.value,
      };
      this.$store.commit("changeCustomerPropertyValue", propertyObject);
    },
  },
};
</script>

<style scoped>
#next-steps {
  width: 50%;
  height: 100%;
}

.section-header-text {
  margin: 0;
  padding: 20px 0 0 20px;
}

#next-textarea {
  width: 88%;
  height: 62%;
  max-height: 66%;

  background-color: whitesmoke;

  border: 0;
  padding: 0;
  margin: 5% 0 0 20px;

  font-family: "Muli", sans-serif;
  font-size: 1em;

  resize: none;
}
</style>
