<template>
  <!-- Personal topics -->
  <div id="personal-topics" class="bottom-border">
    <div class="section-header-text">{{ headerText }}</div>
    <textarea
      id="topics-textarea"
      @input="changed"
      :value="this.$store.getters.patientSheetData($sheetIndex).personalTopics"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "PersonalTopics",
  inject: ["$sheetIndex"],
  data() {
    return {
      headerText: "Personal Topics",
    };
  },
  methods: {
    changed: function(event) {
      const propertyObject = {
        id: "personalTopics",
        value: event.target.value,
      };
      this.$store.commit("changeCustomerPropertyValue", propertyObject);
    },
  },
};
</script>

<style scoped>
#personal-topics {
  width: 100%;
  height: 20%;
}

.section-header-text {
  margin: 0;
  padding: 20px 0 0 20px;
}

#topics-textarea {
  width: 94%;
  height: 62%;
  max-height: 70%;

  background-color: whitesmoke;

  border: 0;
  padding: 0;
  margin: 2.5% 0 0 20px;

  font-family: "Muli", sans-serif;
  font-size: 1em;

  resize: none;
}
</style>
